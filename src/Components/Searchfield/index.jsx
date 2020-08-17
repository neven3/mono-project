import React from 'react';
import './styles.css';

export default function Searchfield({placeholder, onChange, searchText}) {
    return(
        <div>
            <h2>Find a car</h2>
            <input
                className="search"
                onChange={onChange}
                type="search"
                placeholder={placeholder}
                defaultValue={searchText}
            />
        </div>
    );
};