import React from 'react';
import './styles.css';

const Card = props => {
    return(
        <div className="card-container">
            <h2>{props.car.make}</h2>
            <p>{props.car.model}</p>
            <p>${props.car.price}</p>
        </div>
    );
};

export default Card;