import React, { Component } from 'react';
import './App.css';
import Home from './Screens/Home';
import Main from './Screens/Main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      screen: 'edit',
      // screen: 'home',
    };
  }

  changeScreen = screen => {
    this.setState({
      screen: screen,
    });
  }

  render() {
    const {screen} = this.state;

    if (screen === 'home') {
      return <Home changeScreen={() => this.changeScreen('main')} />
    }

    return(
        <Main 
          screen={screen}
          changeScreen={this.changeScreen}
        />
    );
  }
}

export default App;
