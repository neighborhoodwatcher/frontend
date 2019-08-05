import React from 'react';
import './App.css';
import { firestore } from './firebase/firebaseUtils'

function App() {
  firestore.collection('users').doc('dsfsdf43ser32').delete()

  return (
    <div>
      <h1>React is up</h1>
    </div>
  );
}

export default App;

