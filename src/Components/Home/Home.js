import React, { Component } from 'react';
import axios from 'axios';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import ChangePagesRendered from '../ChangePagesRendered/ChangePagesRendered';


class App extends Component {

  state = {
    books: [],
    textField: '',
    loading: false,
    currentPage: 1,
    booksPerPage: 10,
  }

  search = async value => {
    this.setState({ loading: true });
    const res = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`
    );
    const booksList = await res.data.items;

    const mapped = booksList.map(book => {
          return book.volumeInfo;
        })

    this.setState({
      books: mapped,
      loading: false,
     });
  };


  handleChange = (event) => {
    this.search(event.target.value);
    this.setState({textField: event.target.value})
    console.log(this.state.books)
  }

  handleClick = (event) => {
    const id = event.target.id;
    if (Number(id) === 5) {
      this.setState({booksPerPage: 5})
    } else if(Number(id) === 10) {
      this.setState({booksPerPage: 10})
    } else if (Number(id) === 15) {
      this.setState({booksPerPage: 15})
    } else if (Number(id) === 20) {
      this.setState({booksPerPage: 20})
    }
  }


  render() {
    const { currentPage, booksPerPage, books, textField } = this.state;

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;


    const filtered = books.filter(book => {
      return book.title.toLowerCase().includes(textField.toLowerCase());
    })

     const currentBooks = filtered.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => {
      this.setState({currentPage: pageNumber})
    }

    const nextPage = () => {
      this.setState({currentPage: currentPage + 1})
    }

    const previousPage = () => {
      this.setState({currentPage: currentPage - 1})
    }


    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">Books</h1>
        <ChangePagesRendered pages={this.handleClick}/>
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={currentBooks} />
        <div className="container">
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}/>
            <ChangePagesRendered pages={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;