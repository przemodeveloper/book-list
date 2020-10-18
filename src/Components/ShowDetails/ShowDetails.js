import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class ShowDetails extends Component {

    state = {
        listOfBooks: [],
        author: [],
        title: [],
        publisher: [],
    }

    componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q={search%20terms}&maxResults=40')
          .then(res => {
            const booksList = res.data.items;
            this.setState({listOfBooks: booksList})

            const match = this.state.listOfBooks.find( item => item.id === String(this.props.match.params.id) );

            this.setState({
                author: match.volumeInfo.authors, 
                title: match.volumeInfo.title, 
                publisher: match.volumeInfo.publisher})
          })
      }
    

    render() {
        
        const { title, author, publisher } = this.state;

        return(
            <div>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{publisher}</p>
                
            </div>
        );
    };
};

export default withRouter(ShowDetails);