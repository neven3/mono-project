import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';

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
