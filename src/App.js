import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Main from './Pages/Main';
import pageStore from './Stores/PageStore';
import {observer} from 'mobx-react';

function App() {
  if (pageStore.page === 'home') {
    return <Home changeScreen={() => pageStore.changePage('main')} />
  }

  return(
      <Main 
        screen={pageStore.page}
        changeScreen={pageStore.changePage}
      />
  );
}

export default observer(App);
