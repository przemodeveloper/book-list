import React from 'react';
import Book from '../Book/Book';

const BookList = (props) => {

    const { allBooks, loading } = props;

    return(
        <div>
            {allBooks.map(element => {
                const link = element.previewLink;
                let url = new URL(link);
                let search_params = url.searchParams.get('id');
                console.log(search_params)
                return <div>
                        <Book title={element.title} link={search_params}/>
                    </div>
            })}
        </div>
    );
};

export default BookList;