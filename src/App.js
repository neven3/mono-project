import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';
import pageStore from './Stores/PageStore';
import {observer} from 'mobx-react';

function App() {
  if (pageStore.screen === 'home') {
    return <Home changeScreen={() => pageStore.changeScreen('main')} />
  }

  return(
      <Main 
        screen={pageStore.screen}
        changeScreen={pageStore.changeScreen}
      />
  );
}

export default observer(App);
