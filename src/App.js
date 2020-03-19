import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Home}></Route> 
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
