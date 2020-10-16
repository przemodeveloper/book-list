import React, { Component } from 'react';
import classes from './App.module.css';
import axios from 'axios';

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
          return book.volumeInfo.title;
        })
        
        this.setState({books: mapped})
      })
  }

  render() {
    return (
      <div className={classes.App}>
        <h1>Book list</h1>
      </div>
    );
  }
}

export default App;
