import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from "../../context/userContext";
import './Navbar.scss'

const Navbar = () => {
    const userContext = useContext(UserContext);
    const { logout, setRoute } = userContext;

    return (
        <div className="nav-container">
            <div className="nav-items-container" >
                <Link style={{ textDecoration: 'none', marginRight: '20px', color: 'black' }} to="/homepage">Home</Link>
                <Link style={{ textDecoration: 'none', marginRight: '20px', color: 'black' }} onClick={() => setRoute("forum")}>Forum</Link>
                <Link style={{ textDecoration: 'none', marginRight: '20px', color: 'black' }} to="/settings">Settings</Link>
                <Link style={{ textDecoration: 'none', marginRight: '20px', color: 'black' }} onClick={logout}>Sign Out</Link>
            </div>
        </div>
    )
}

export default Navbar
