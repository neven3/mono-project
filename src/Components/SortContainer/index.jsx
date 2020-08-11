import React from 'react';
import SortOption from '../SortOption';

export default function SortContainer(props) {
    return(
        <div>
            <SortOption sortFunction={props.sortFunction} sortBy="make" />
            <SortOption sortFunction={props.sortFunction} sortBy="model" />
            <SortOption sortFunction={props.sortFunction} sortBy="price" />
        </div>
    );
};