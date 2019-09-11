import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import UserState from './context/userState'
import Forum from './pages/Forum'
import Settings from './pages/Settings'

function App() {

  return (
    <div>
      <UserState>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/homepage' component={HomePage} />
          <Route path='/forum' component={Forum} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </UserState>
    </div>
  );
}

export default App;

