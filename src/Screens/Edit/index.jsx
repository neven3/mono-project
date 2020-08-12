import React from 'react';
import './styles.css';

export default function Edit(props) {
    return(
        <div className="screen">
            <h2>Edit a card</h2>
            <h3>Click on a card to edit it</h3>
            <button
                className="go-back-button"
                onClick={() => props.changeScreen('main')}
                >
                Go back to main
            </button>
            {props.children}
        </div>
    );
};