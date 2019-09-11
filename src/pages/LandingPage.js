import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/userContext'

const LandingPage = () => {
    const userContext = useContext(UserContext)

    return (
        <div>
            <h1>Landing Page</h1>
            <Link to='/homepage'><button>Sign-In with Google</button></Link>
        </div>
    )
}

export default LandingPage
