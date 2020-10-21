import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import ChangePagesRendered from '../ChangePagesRendered/ChangePagesRendered';
import { setTextField, setPages, setNextPage, setPreviousPage, setPaginate } from '../../actions';

const mapStateToProps = state => {
  return {
    textField: state.textField,
    currentPage: state.currentPage,
    booksPerPage: state.booksPerPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: (event) => dispatch(setTextField(event.target.value)),
    handleClick: (event) => dispatch(setPages(event.target.id)),
    nextPage: () => dispatch(setNextPage()),
    previousPage: () => dispatch(setPreviousPage()),
    paginate: (number) => dispatch(setPaginate(number)),
  }
}

class App extends Component {

  state = {
    books: [],
  }

  search = async value => {
    const res = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`
    );
    const booksList = await res.data.items;

    const mapped = booksList.map(book => {
          return book.volumeInfo;
        })

    this.setState({
      books: mapped,
     });
  };

  handleChange = (event) => {
    this.search(event.target.value);
  }

  render() {
    const { books } = this.state;
    const { textField, currentPage, booksPerPage, handleClick, nextPage, previousPage, paginate } = this.props;

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;


    const filtered = books.filter(book => {
      return book.title.toLowerCase().includes(textField.toLowerCase());
    })

    const currentBooks = filtered.slice(indexOfFirstBook, indexOfLastBook);

    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">Books</h1>
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={currentBooks} />
        <div className="container">
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}/>
            <ChangePagesRendered pages={handleClick}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);