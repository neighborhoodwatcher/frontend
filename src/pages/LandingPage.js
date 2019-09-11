import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/userContext'

const LandingPage = () => {
    const userContext = useContext(UserContext)

    console.log(userContext)

    return (
        <div>
            <h1>Landing Page</h1>
            <Link to='/homepage'><button>Homepage</button></Link>
        </div>
    )
}

export default LandingPage
