import React, { useContext } from 'react'
import firebase from '../firebase/firebaseUtils'
import UserContext from '../context/userContext'
import 'firebase/auth'

const SignIn = () => {
    const userContext = useContext(UserContext)

    const { login } = userContext

    const auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })

    const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then(result => {
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