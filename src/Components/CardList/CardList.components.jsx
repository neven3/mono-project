import React from 'react';
import Card from '../Card/Card.components';
import './card-list.styles.css';

const CardList = props => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => {
                    return (
                        <Card key={monster.id} monster={monster} />
                    );
                })
            }
        </div>
    );
};

export default CardList;