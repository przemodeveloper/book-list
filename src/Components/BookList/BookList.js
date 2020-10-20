import React from 'react';
import Book from '../Book/Book';
import { PropTypes } from 'prop-types';

const BookList = (props) => {

    const { allBooks } = props;

    return(
        <div>
            {allBooks.map(element => {
                const link = element.previewLink;
                let url = new URL(link);
                let searchParams = url.searchParams.get('id');
                return <div>
                        <Book key={searchParams} title={element.title} link={searchParams}/>
                    </div>
            })}
        </div>
    );
};

BookList.propTypes = {
    allBooks: PropTypes.array,
  };

export default BookList;