import React, { Component } from 'react';
import classes from './Home.module.css';
import axios from 'axios';
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class App extends Component {

  state = {
    books: [],
    textField: '',
    loading: false,
    currentPage: 1,
    booksPerPage: 5,
  }

  componentDidMount() {
    this.setState({loading: true})
    axios.get('https://www.googleapis.com/books/v1/volumes?q={search%20terms}&maxResults=40')
      .then(res => {
        const booksList = res.data.items;

        const mapped = booksList.map(book => {
          return book.volumeInfo;
        })

        
        this.setState({books: mapped, loading: false})
      })
  }

  handleChange = (event) => {
    this.setState({textField: event.target.value})
  }
  

  render() {

    const { currentPage, booksPerPage, loading } = this.state;

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    
    const filtered = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.textField.toLowerCase());
    })

    const currentBooks = filtered.slice(indexOfFirstBook, indexOfLastBook);

    // const options = {
    //   placeholder: 'Enter book title...',
    //   delay: 250,
    // }

    // const columns = [{
    //   dataField: 'title',
    //   filter: textFilter(options)
    // }];


    return (
      <div className="container">
        <h1 className="my-5 text-primary text-center">Books</h1>
        {/* <BootstrapTable
          className={classes.list}
          keyField='title' 
          data={ this.state.books } 
          columns={ columns }
          filter={ filterFactory() } 
          pagination={ paginationFactory() }/> */}
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={currentBooks} loading={loading}/>
      </div>
    );
  }
}

export default App;