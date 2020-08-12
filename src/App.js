import React, { Component } from 'react';
import './App.css';
import Home from './Screens/Home';
import Main from './Screens/Main';
import Edit from './Screens/Edit';

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: 'home',
    };
  }

  changeScreen = screen => {
    this.setState({
      screen: screen,
    });
  }

  render() {
    const {screen} = this.state;
    if (screen === 'edit') {
      return(
        <Edit changeScreen={() => this.changeScreen('main')} />
      );
    } else if (screen === 'main') {
      return(
        <Main changeScreen={() => this.changeScreen('edit')} />
      );
    }
    return(
      <Home changeScreen={() => this.changeScreen('main')} />
    );
  }
}

export default App;
