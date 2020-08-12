import React, { Component } from 'react';
import CardList from './Components/CardList';
import ListManipulator from './Components/ListManipulator';
import './App.css';
import cars from './Common/mockData';
import sortItems from './Common/sortItems'

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      sortParams: {
        sortBy: 'make',
        direction: 'ascending',
      },
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

  render() {
    const { searchText, sortParams: {sortBy, direction} } = this.state;
    const sortedCars = sortItems(cars, direction, sortBy);
    const filteredCars = sortedCars.filter(car => {
      return car.make.toLowerCase().includes(searchText) || car.model.toLowerCase().includes(searchText);
    });
    
    return(
      <div className="App" >
        <h1>Cars</h1>
        <ListManipulator
          handleSearchfieldChange={this.handleSearchfieldChange}
          doOnSortClick={this.handleSortButtonClick}
        />
        <CardList cars={filteredCars} />
      </div>
    );
  }
}

export default App;
