import React from 'react';
import Searchfield from '../Searchfield';
import SortContainer from '../SortContainer';

export default function ListManipulator(props) {
    return(
        <div>
            <Searchfield onChange={props.handleSearchfieldChange} placeholder="search" />
            <SortContainer sortFunction={props.sortFunction} sortBy="name" />
            <SortContainer sortFunction={props.sortFunction} sortBy="email" />
        </div>
    );
};