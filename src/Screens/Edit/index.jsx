import React from 'react';
import './styles.css';

export default function Edit(props) {
    return(
        <div className="screen">
            <h1>Make edit screen functional</h1>
            <button
                className="back"
                onClick={props.changeScreen}
            >
                Go back to main
            </button>
        </div>
    );
};