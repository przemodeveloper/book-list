import React, { Component } from 'react';
import axios from 'axios';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
// import Pagination from '../Pagination/Pagination';

class App extends Component {

  state = {
    books: [],
    textField: '',
    // currentPage: 1,
    // booksPerPage: 10,
  }

  componentDidUpdate() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.textField}`)
      .then(res => {
        const booksList = res.data.items;

        const mapped = booksList.map(book => {
          return book.volumeInfo;
        })

        
        this.setState({books: mapped})
      })
  }

  handleChange = (event) => {
    this.setState({textField: event.target.value})
  }
  

  render() {

    // const { currentPage, booksPerPage, books } = this.state;

    // const indexOfLastBook = currentPage * booksPerPage;
    // const indexOfFirstBook = indexOfLastBook - booksPerPage;
    
    const filtered = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.textField.toLowerCase());
    })

    // const currentBooks = filtered.slice(indexOfFirstBook, indexOfLastBook);

    // const paginate = (pageNumber) => {
    //   this.setState({currentPage: pageNumber})
    // }

    // const nextPage = () => {
    //   this.setState({currentPage: currentPage + 1})
    // }

    // const previousPage = () => {
    //   this.setState({currentPage: currentPage - 1})
    // }

    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">Books</h1>
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={filtered} />
        {/* <Pagination 
          booksPerPage={booksPerPage} 
          totalBooks={books.length} 
          paginate={paginate} 
          nextPage={nextPage} 
          previousPage={previousPage}/> */}
      </div>
    );
  }
}

export default App;