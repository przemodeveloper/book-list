import React from 'react';
import classes from './SearchBar.module.scss';
import { PropTypes } from 'prop-types';

const SearchBar = (props) => {

    const { change } = props;

    return(
        <div className={classes.container}>
            <input className={classes.input} onChange={change} type="text" placeholder="Start typing..."/>
        </div>
    );
};

SearchBar.propTypes = {
    change: PropTypes.func,
}

export default SearchBar;