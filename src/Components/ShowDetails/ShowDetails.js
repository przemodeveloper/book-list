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
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.id}`)
          .then(res => {
            const booksList = res.data.items;

            const mapped = booksList.map(book => {
                return book.volumeInfo;
              })

            this.setState({listOfBooks: mapped})

            console.log(mapped[0].title)

            this.setState({
                author: mapped[0].authors, 
                title: mapped[0].title, 
                publisher: mapped[0].publisher})
          })
      }
    

    render() {
        
        const { title, author, publisher } = this.state;

        return(
            <div className="container">
                <h1 className="my-5 text-primary text-center">{title}</h1>
                <h3 className="my-5 text-primary text-center">{author}</h3>
                <p className="my-5 text-primary text-center">{publisher}</p>
            </div>
        );
    };
};

export default withRouter(ShowDetails);