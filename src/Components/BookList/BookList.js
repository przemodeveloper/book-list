import React from 'react';
import Book from '../Book/Book';

const BookList = (props) => {

    return(
        <div>
            {props.allBooks.map(element => {
                return <Book title={element.title} find={element.id}/>
            })}
        </div>
    );
};

export default BookList;