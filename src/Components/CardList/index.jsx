import React from 'react';
import Card from '../Card';
import './styles.css';

export default function CardList(props) {
    return (
        <div className='card-list'>
            {
                props.cars.map(car => {
                    return (
                        <Card key={Math.random()} car={car} />
                    );
                })
            }
        </div>
    );
};