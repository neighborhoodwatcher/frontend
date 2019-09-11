import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB0CZeaxILErwZabEV86lKrrypGKAu8efU",
  authDomain: "city-watch-3327b.firebaseapp.com",
  databaseURL: "https://city-watch-3327b.firebaseio.com",
  projectId: "city-watch-3327b",
  storageBucket: "",
  messagingSenderId: "177073538660",
  appId: "1:177073538660:web:222459942cf43288f08171"
};

firebase.initializeApp(config)

export const firestore = firebase.firestore()

export default firebase;
