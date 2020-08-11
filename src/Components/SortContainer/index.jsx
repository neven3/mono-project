import React from 'react';
import SortButton from '../SortButton'

export default function SortContainer(props) {
    return(
        <div style={{display: 'inline-block', margin: '50px', border: '3px solid black', padding: '20px', color: 'white'}}>
            <h2>Sort by {props.sortBy}</h2>
            <SortButton sortBy={props.sortBy} direction="ascending" onClick={props.sortFunction} />
            <SortButton sortBy={props.sortBy} direction="descending" onClick={props.sortFunction} />
        </div>
    );
}