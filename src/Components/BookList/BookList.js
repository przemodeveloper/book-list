import React from 'react';
import Book from '../Book/Book';

const BookList = (props) => {

    const { allBooks } = props;

    return(
        <div>
            {allBooks.map(element => {
                const link = element.previewLink;
                let url = new URL(link);
                let search_params = url.searchParams.get('id');
                return <div>
                        <Book key={search_params} title={element.title} link={search_params}/>
                    </div>
            })}
        </div>
    );
};

export default BookList;