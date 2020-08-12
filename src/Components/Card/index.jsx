import React from 'react';
import './styles.css';

export default function Card(props) {
    return(
        <div className="card-container">
            <h3 className="car-make">{props.car.make}</h3>
            <p>{props.car.model}</p>
            <p>${new Intl.NumberFormat('en-US').format(props.car.price)}</p>
        </div>
    );
};