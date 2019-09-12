import React, { useContext } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Forum from './pages/Forum'
import Settings from './pages/Settings'
import UserContext from './context/userContext'

function App() {
  const userContext = useContext(UserContext)
  
  const {isLoggedIn} = userContext.userState 

  return (
    <div>
        <Switch>
          <Route exact path='/' render={() => (
            isLoggedIn ? (
              <Redirect to="/homepage"/>
            ) : (
              <LandingPage/>
            )
          )} />
          <Route path='/homepage' component={HomePage} />
          <Route path='/forum' component={Forum} />
          <Route path='/settings' component={Settings} />
        </Switch>
    </div>
  );
}

export default App;

