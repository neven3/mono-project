import React, { Component } from 'react';
import EditCard from '../EditCard';
import './styles.css';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {cardClicked: false};
    }

    handleCardClick = () => {
        if (this.props.screen.includes('edit')) {
            // this.props.changeScreen('edit-screen')
            this.setState({cardClicked: true});
        }
    }

    render() {
        const normalCard = (
            <div
                className="card-container"
                onClick={this.handleCardClick}
            >
                <h3 className="car-make">{this.props.car.make}</h3>
                <p>{this.props.car.model}</p>
                <p>${new Intl.NumberFormat('en-US').format(this.props.car.price)}</p>
            </div>
        );

        return(
            <div>
                {
                    this.state.cardClicked 
                        ? <EditCard
                            make={this.props.car.make}
                            model={this.props.car.model}
                            price={this.props.car.price}
                            changeScreen={() => this.props.changeScreen('main')}
                        /> 
                        : normalCard
                }
            </div>
        );
    }
}