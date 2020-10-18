import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = (props) => {

    const { change } = props;

    return(
        <div className={classes.container}>
            <input className={classes.input} onChange={change} type="text" placeholder="Title..."/>
        </div>
    );
};

export default SearchBar;