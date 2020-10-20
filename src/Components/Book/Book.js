import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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


Book.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
  };

export default Book;