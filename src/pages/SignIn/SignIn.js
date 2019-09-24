import React, { useContext } from 'react'
import firebase from '../../firebase/firebaseUtils'
import UserContext from '../../context/userContext'
import 'firebase/auth'
import './SignIn.css'

const SignIn = () => {
    const userContext = useContext(UserContext)

    const { login } = userContext

    const auth = firebase.auth()

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })

    const signInWithGoogle = () => auth.signInWithPopup(provider)
    .then(result => {
        login(result.user)
    })

    return (
        <div className="sign-in-card">
            <div className="signin-card-content">
                <p>Get started with Google Sign-In!</p>
                <button className="google-button" onClick={signInWithGoogle}>Sign-In</button>
            </div>
        </div>
    )
}

export default SignIn