import React, { Component } from 'react';
import CardList from './Components/CardList/CardList.components';
import Searchfield from './Components/Searchfield/Searchfield.components';
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
        <Searchfield onChange={this.handleSearchfieldChange} placeholder="search" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
