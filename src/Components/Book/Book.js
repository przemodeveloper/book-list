import React from 'react';
import classes from './Book.module.css';

const Book = () => {
    return(
        <div>
            <li className={classes.title}>Book title</li>
        </div>
    );
};

export default Book;