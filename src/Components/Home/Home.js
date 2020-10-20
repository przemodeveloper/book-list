import React, { Component } from 'react';
import axios from 'axios';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';


class App extends Component {

  state = {
    books: [],
    textField: '',
    //totalResults: 0,
    //totalPages: 0,
    //currentPageNumber: 0,
    loading: false,
    currentPage: 1,
    booksPerPage: 10,
  }

  // getPageCount = (total, denominator) => {
  //   const divisible = 0 === total % denominator;
  //   const valueToBeAdded = divisible ? 0 : 1;
  //   return Math.floor(total/denominator) + valueToBeAdded;
  // }


  search = async value => {
    this.setState({ loading: true });
    const res = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`
    );
    const booksList = await res.data.items;

    // const total = res.data.totalItems;
    //const totalPagesCount = this.getPageCount( total, 10 );

    const mapped = booksList.map(book => {
          return book.volumeInfo;
        })

    this.setState({
      books: mapped,
      loading: false,
      // totalResults: total,
     });
  };


  handleChange = (event) => {
    this.search(event.target.value);
    this.setState({textField: event.target.value})
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
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={currentBooks} />

          <Pagination
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}/>

      </div>
    );
  }
}

export default App;