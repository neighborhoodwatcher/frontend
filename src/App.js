import React from 'react';
import './App.css';
import { firestore } from './firebase/firebaseUtils'
import { Route, Switch, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

function App() {
  firestore.collection('users').doc('dsfsdf43ser32').delete()

  return (
    <div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

