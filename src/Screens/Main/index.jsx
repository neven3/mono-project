import React, { Component } from 'react';
import CardList from '../../Components/CardList';
import ListManipulator from '../../Components/ListManipulator';
import Pagination from '../../Components/Pagination'
import cars from '../../Common/mockData';
import sortItems from '../../Common/sortItems'
import getCurrentCards from '../../Common/getCurrentCards';
import Edit from '../Edit';
import './styles.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
        searchText: '',
        sortParams: {
            sortBy: 'make',
            direction: 'ascending',
        },
        currentPage: 1,
        cardsPerPage: 6,
        };
    }

    handleSearchfieldChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    handleSortButtonClick = (sortBy, direction) => {
        this.setState({sortParams: {
            sortBy,
            direction,
        }});
    }

    setCurrentPage = (event) => {
        this.setState({
            currentPage: event.target.id,
        });
    }

    render() {
        const { 
            searchText, 
            sortParams: {sortBy, direction},
            currentPage,
            cardsPerPage,
        } = this.state;
        const sortedCars = sortItems(cars, direction, sortBy);
        const filteredCars = sortedCars.filter(car => {
        return car.make.toLowerCase().includes(searchText) || car.model.toLowerCase().includes(searchText);
        });
        const currentCards = getCurrentCards(filteredCars, currentPage, cardsPerPage);

        const edit = (
            <Edit changeScreen={this.props.changeScreen}>
                <CardList cars={currentCards} />
            </Edit>
        );

        const main = (
            <div>
                <ListManipulator
                    handleSearchfieldChange={this.handleSearchfieldChange}
                    doOnSortClick={this.handleSortButtonClick}
                />
                <button
                    className="edit"
                    onClick={() => this.props.changeScreen('edit')}
                >
                    Edit a card
                </button>
                <CardList cars={currentCards} />
                <Pagination 
                    cardsPerPage={this.state.cardsPerPage}
                    totalCards={filteredCars.length}
                    setCurrentPage={this.setCurrentPage}
                />
            </div>
        );

        return(
            <div className="Main">
                <h1>Cars</h1>
                {
                    this.props.screen === 'edit'
                        ? edit
                        : main
                }
            </div>            
        );
    }
}

export default Main;