import React, { Component } from 'react';
import cars from '../../Common/mockData';
import './styles.css'
import EditInputsContainer from '../EditInputsContainer/';

export default class EditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            price: '',
        };
    }

    handleInputChange = (event, input) => {
        if (event.target.value.length !== 0) {
            this.setState({[input]: event.target.value});
        }
    }

    changeItemInArray = (arrOfKeysToChange) => {
        const indexOfItemInCars = cars.findIndex((car) => {
            return(
                arrOfKeysToChange.reduce((accBool, currentKey) => {
                    return accBool && car[currentKey] === this.props[currentKey];
                }, true)
            );
        });

        arrOfKeysToChange.forEach(key => {
            if (this.state[key] !== '') {
                if (typeof cars[indexOfItemInCars][key] === 'number') {
                    cars[indexOfItemInCars][key] = Number(this.state[key]);
                } else {
                    cars[indexOfItemInCars][key] = this.state[key];
                }
            }
        });
    }

    render() {
        return (
            <div className="card-container edit-card">
                <EditInputsContainer
                    propertiesArray={Object.keys(this.state)}
                    placeholdersObject={this.props}
                    onInputChangeFunc={this.handleInputChange}
                />
                <button
                    className="changes-btn"
                    onClick={() => {
                        this.changeItemInArray(Object.keys(this.state));
                        this.props.changeScreen();
                    }}
                >
                        Make changes
                </button>
            </div>
        );
    }
};