import React from 'react';
import './searchfield.styles.css';

const Searchfield = ({placeholder, onChange}) => {
    return(
        <input className="search" onChange={onChange} type="search" placeholder={placeholder} />
    );
};

export default Searchfield;