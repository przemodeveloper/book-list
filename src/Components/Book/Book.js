import React from 'react';
import classes from './Book.module.css';

const Book = (props) => {
    return(
        <div>
            <li className={classes.title}>{props.title}</li>
        </div>
    );
};

export default Book;