import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    return(
        <div className={classes.container}>
            <input className={classes.input} onChange={props.change} type="text" placeholder="Title..."/>
        </div>
    );
};

export default SearchBar;