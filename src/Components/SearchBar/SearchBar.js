import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return(
        <div className={classes.container}>
            <input className={classes.input} type="text" placeholder="Title..."/>
        </div>
    );
};

export default SearchBar;