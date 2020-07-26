import React, { Component } from 'react';
import CardList from './Components/CardList/CardList.components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters } = this.state;
    return(
      <div className="App" >
        <CardList name='Neven'>
          {monsters.map((monsterObj, index) => <h1 key={`monster${index}`}>{monsterObj.name}</h1>)}
        </CardList>
      </div>
    );
  }
}

export default App;
