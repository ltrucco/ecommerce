import React from 'react'
import './App.css';
import HomePage from './pages/homepage/HomePage'
import {Route, Switch} from 'react-router-dom'
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shoppage/ShopPage'


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
