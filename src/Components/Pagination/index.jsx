import React from 'react';
import './styles.css';

export default function Pagination(props) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalCards / props.cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <div>
            {pageNumbers.map(pageNum => {
                return <button
                    className="page-button"
                    key={pageNum}
                    id={pageNum}
                    onClick={props.setCurrentPage}
                >
                    {pageNum}
                </button>
            })}
        </div>
    );
};