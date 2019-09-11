import React, { useContext, useEffect } from 'react'
import UserContext from '../context/userContext'
import SignIn from './SignIn';
import 'firebase/auth'
import firebase from 'firebase'
import Navbar from '../components/Navigation/Navbar'

const HomePage = () => {
    const userContext = useContext(UserContext)

    const {isLoggedIn} = userContext.userState
    const {login} = userContext

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                login(user)
            }
        })
    }, [])

    if(!isLoggedIn) {
        return (
            <SignIn />
        )
    } else return (
        <div>
            <Navbar />
            <h1>{`Hello ${userContext.userState.user.displayName}`}</h1>
        </div>
    )
}

export default HomePage