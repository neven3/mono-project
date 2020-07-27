import React from 'react';
import './searchfield.styles.css';

const Searchfield = (props) => {
    return(
        <input className="search" onChange={props.onChange} type="search" placeholder="search monsters" />
    );
};

export default Searchfield;