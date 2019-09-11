import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/homepage">Home</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/settings">Settings</Link>
        </div>
    )
}

export default Navbar
