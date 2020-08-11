import React from 'react';
import SortButton from '../SortButton'
import './styles.css'

export default function SortOption(props) {
    return(
        <div className="sort-option">
            <h3>Sort by {props.sortBy}</h3>
            <SortButton
                sortBy={props.sortBy}
                direction="ascending"
                onClick={props.sortFunction}
            />
            <SortButton
                sortBy={props.sortBy}
                direction="descending"
                onClick={props.sortFunction}
            />
        </div>
    );
}