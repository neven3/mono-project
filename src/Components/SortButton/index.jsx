import React from 'react';
import './styles.css';

export default function SortButton(props) {
    function handleClick() {
        props.onClick(props.sortBy, props.direction);
    }
    
    return(
        <button className="sort-button" onClick={handleClick}>Sort {props.direction}</button>
    );
};