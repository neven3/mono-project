import React from 'react';
import Card from '../Card';
import './styles.css';

export default function CardList(props) {
    return (
        <div className='card-list'>
            {
                props.cars.map(car => {
                    return (
                        <Card 
                            key={car.model + Math.random()}
                            car={car}
                            screen={props.screen}
                            changeScreen={props.changeScreen}
                        />
                    );
                })
            }
        </div>
    );
};