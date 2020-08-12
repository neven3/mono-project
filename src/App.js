import React, { Component } from 'react';
import CardList from './Components/CardList';
import ListManipulator from './Components/ListManipulator';
import './App.css';
import cars from './mockData';
import Pagination from './Components/Pagination'

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars,
      searchText: '',
      currentPage: 1,
      cardsPerPage: 5,
    };
  }

  handleSearchfieldChange = (event) => {
    this.setState({searchText: event.target.value});
  }

  sortItems = (direction, sortByKey) => {
    if (direction === 'ascending') {
      this.setState({
        cars: this.state.cars.sort((a, b) => {
          if (typeof a[sortByKey] === 'string') {
            return a[sortByKey].toLowerCase() > b[sortByKey].toLowerCase() ? 1 : -1;
          } else {
            return a[sortByKey] > b[sortByKey] ? 1 : -1; 
          }
        }),
      });
    } else if (direction === 'descending') {
      this.setState({
        cars: this.state.cars.sort((a, b) => {
          if (typeof a[sortByKey] === 'string') {
            return a[sortByKey].toLowerCase() < b[sortByKey].toLowerCase() ? 1 : -1;
          } else {
            return a[sortByKey] < b[sortByKey] ? 1 : -1;
          }
        }),
      });
    }
  }

  getCurrentCards = (array) => {
    const indexOfLastCard = this.state.currentPage * this.state.cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - this.state.cardsPerPage;
    const currentCards = array.slice(indexOfFirstCard, indexOfLastCard);
    return currentCards;
  }

  setCurrentPage = (event) => {
    this.setState({
      currentPage: event.target.id,
    });
  }

  render() {
    const { cars, searchText } = this.state;
    const filteredCars = cars.filter(car => {
      return car.make.toLowerCase().includes(searchText) || car.model.toLowerCase().includes(searchText);
    });
    const currentCards = this.getCurrentCards(filteredCars);

    return(
      <div className="App" >
        <h1>Cars</h1>
        <ListManipulator
          handleSearchfieldChange={this.handleSearchfieldChange}
          sortFunction={this.sortItems}
        />
        <CardList cars={currentCards} />
        <Pagination 
          cardsPerPage={this.state.cardsPerPage}
          totalCards={filteredCars.length}
          setCurrentPage={this.setCurrentPage}
        />
      </div>
    );
  }
}

export default App;
