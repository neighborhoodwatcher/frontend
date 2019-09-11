import React, { useContext } from 'react'
import firebase from 'firebase'
import UserContext from '../context/userContext'
import 'firebase/auth'
import {firestore} from '../firebase/firebaseUtils'

const SignIn = () => {
    const userContext = useContext(UserContext)

    const { login } = userContext

    const auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })

    const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then(result => {
        firestore.collection('users').doc(result.user.uid).set({
            displayName: result.user.displayName,
            email: result.user.email
            })
        login(result.user)
        console.log('signin', userContext)
    })

    return (
        <div>
            <button onClick={signInWithGoogle}>Google Sign-In</button>
        </div>
    )
}

export default SignIn