import React from 'react';
import './styles.css';

const Searchfield = ({placeholder, onChange}) => {
    return(
        <div>
            <h2>Find a car</h2>
            <input className="search" onChange={onChange} type="search" placeholder={placeholder} />
        </div>
    );
};

export default Searchfield;