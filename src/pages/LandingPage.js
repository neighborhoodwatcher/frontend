import React from 'react'
import { Link } from 'react-router-dom'

import HomePage from './HomePage'

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <Link to='/homepage'><button>Homepage</button></Link>
        </div>
    )
}

export default LandingPage
