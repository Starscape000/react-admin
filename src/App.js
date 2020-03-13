import React from 'react';
import './App.scss';
import {HashRouter, Link, Route} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
      </div>
    </HashRouter>
  );
}

export default App;
