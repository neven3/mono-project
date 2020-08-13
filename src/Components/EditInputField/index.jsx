import React from 'react';

export default function EditInputField(props) {
    const property = props.forProperty;
    return(
        <div className="field">
            <label htmlFor={property}>{property}</label>
            <input
                name={property}
                id={property}
                type="text"
                placeholder={props.placeholder}
                data-value={props.placeholder}
                onChange={(event) => props.onInputChangeFunc(event, property)}
            />
        </div>
    );
};