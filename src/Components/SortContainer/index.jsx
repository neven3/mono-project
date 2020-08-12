import React from 'react';
import SortOption from '../SortOption';

export default function SortContainer(props) {
    return(
        <div>
            <SortOption doOnSortClick={props.doOnSortClick} sortBy="make" />
            <SortOption doOnSortClick={props.doOnSortClick} sortBy="model" />
            <SortOption doOnSortClick={props.doOnSortClick} sortBy="price" />
        </div>
    );
};