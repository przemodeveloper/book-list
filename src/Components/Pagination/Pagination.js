/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = (props) => {

    const { booksPerPage, totalBooks, paginate, nextPage, previousPage } = props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => previousPage()}>Previous</a>
                    </li>
                        {pageNumbers.map(number => {
                            return <li className="page-item" key={number}>
                                <a onClick={() => paginate(number)} className="page-link">{number}</a>

                            </li>
                        })}
                    <li className="page-item">
                        <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default Pagination;