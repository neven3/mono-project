import React, { Component } from 'react';
import CardList from './Components/CardList';
import ListManipulator from './Components/ListManipulator';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  handleSearchfieldChange = (event) => {
    this.setState({searchText: event.target.value});
  }

  sortItems = (direction, sortByKey) => {
    if (direction === 'ascending') {
      this.setState({monsters: this.state.monsters.sort((a, b) => a[sortByKey] > b[sortByKey] ? 1 : -1)})
    } else if (direction === 'descending') {
      this.setState({monsters: this.state.monsters.sort((a, b) => a[sortByKey] < b[sortByKey] ? 1 : -1)})
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText) || monster.email.toLowerCase().includes(searchText);
    });

    return(
      <div className="App" >
        <h1>Monsters</h1>
        <ListManipulator handleSearchfieldChange={this.handleSearchfieldChange} sortFunction={this.sortItems} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
