import React, { useContext } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import Forum from './components/Forum/Forum'
import Settings from './components/Settings/Settings'
import UserContext from './context/userContext'
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"

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
          <PrivateRoute path='/homepage' component={HomePage} />
          <PrivateRoute path='/forum' component={Forum} />
          <PrivateRoute path='/settings' component={Settings} />
        </Switch>
    </div>
  );
}

export default App;

