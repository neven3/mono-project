import React from 'react';
import './styles.css';

export default function Edit(props) {
    const instructions = props.screen === 'edit'
        ? <h3>Click on a card to edit it</h3>
        : <h3>Make your changes</h3>;

    return(
        <div className="screen">
            <h2>Edit a card</h2>
            {instructions}
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