import React from 'react';
import classes from './Book.module.css';
import { Link } from 'react-router-dom';
  

const Book = (props) => {

    const { link, title } = props;

    const url = `/book/${link}`;

    return(
        <div className="alert alert-primary">
            <h4 className="alert-heading">{title}</h4>
            <Link to={url}>Show details</Link>
        </div>
    );
};

export default Book;