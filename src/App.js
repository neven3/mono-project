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
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
