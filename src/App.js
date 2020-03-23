import React from 'react';
import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/login/login';
import Home from './pages/home/home';
import Page404 from './pages/page404/page404';
import Page500 from './pages/page500/page500';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/page404' component={Page404}></Route>
          <Route path='/page500' component={Page500}></Route>
          <Route path='/' component={Home}></Route> 
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
