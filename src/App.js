import React, { Component } from 'react';
import CardList from './Components/CardList';
import ListManipulator from './Components/ListManipulator';
import './App.css';
import mockData from './mockData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: [],
      searchText: '',
    };
  }

  handleSearchfieldChange = (event) => {
    this.setState({searchText: event.target.value});
  }

  sortItems = (direction, sortByKey) => {
    if (direction === 'ascending') {
      this.setState({cars: this.state.cars.sort((a, b) => a[sortByKey] > b[sortByKey] ? 1 : -1)})
    } else if (direction === 'descending') {
      this.setState({cars: this.state.cars.sort((a, b) => a[sortByKey] < b[sortByKey] ? 1 : -1)})
    }
  }

  componentDidMount() {
    this.setState({cars: mockData})
  }

  render() {
    const { cars, searchText } = this.state;
    const filteredCars = cars.filter(car => {
      return car.make.toLowerCase().includes(searchText) || car.model.toLowerCase().includes(searchText);
    });

    return(
      <div className="App" >
        <h1>Cars</h1>
        <ListManipulator handleSearchfieldChange={this.handleSearchfieldChange} sortFunction={this.sortItems} />
        <CardList cars={filteredCars} />
      </div>
    );
  }
}

export default App;
