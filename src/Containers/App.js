import React, { Component } from 'react';
import classes from './App.module.css';
import axios from 'axios';
import BookList from '../Components/BookList/BookList';
import SearchBar from '../Components/SearchBar/SearchBar';

class App extends Component {

  state = {
    books: [],
    textField: '',
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q={search%20terms}&maxResults=40')
      .then(res => {
        const booksList = res.data.items;

        const mapped = booksList.map(book => {
          return book.volumeInfo;
        })
        
        this.setState({books: mapped})
        console.log(this.state.books)
      })
  }

  handleChange = (event) => {
    this.setState({textField: event.target.value})
  }

  render() {

    const filtered = this.state.books.filter(book => {
      return book.title.toLowerCase().includes(this.state.textField.toLowerCase());
    })

    return (
      <div className={classes.App}>
        <SearchBar change={this.handleChange}/>
        <BookList allBooks={filtered}/>
      </div>
    );
  }
}

export default App;
