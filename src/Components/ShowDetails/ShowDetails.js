import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

const ShowDetails = (props) => {

    const [books, setBooks] = useState({
        listOfBooks: [],
        author: [],
        title: [],
        publisher: [],
    })

    useEffect(() => {
        async function fetchData() {
            const result =  await axios(
            `https://www.googleapis.com/books/v1/volumes?q=${props.match.params.id}`,
            );
            const booksList = result.data.items;
            const mapped = booksList.map(book => {
                return book.volumeInfo;
            })
            setBooks({
                listOfBooks: mapped,
                author: mapped[0].authors,
                title: mapped[0].title,
                publisher: mapped[0].publisher})
        }

        fetchData();
      }, [props.match.params.id]);

        const { title, author, publisher } = books;

        return(
            <div className="container">
                <h1 className="my-5 text-primary text-center">{title}</h1>
                <h3 className="my-5 text-primary text-center">{author}</h3>
                <p className="my-5 text-primary text-center">{publisher}</p>
            </div>
    );
};

export default withRouter(ShowDetails);