import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCKVr6o4VkpR8hZ3shDsQoymCVSqUfpQdw",
    authDomain: "neighborhoodwatch-b6a0f.firebaseapp.com",
    databaseURL: "https://neighborhoodwatch-b6a0f.firebaseio.com",
    projectId: "neighborhoodwatch-b6a0f",
    storageBucket: "",
    messagingSenderId: "71273987454",
    appId: "1:71273987454:web:ed9dd988d6732e79"
};

firebase.initializeApp(config)

export const firestore = firebase.firestore()

export default firebase;
