import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from "../../context/userContext";

const Navbar = () => {
    const userContext = useContext(UserContext);
    const { logout } = userContext;

    return (
        <div>
            <Link to="/homepage">Home</Link>
            <Link to="/forum">Forum</Link>
            <Link to="/settings">Settings</Link>
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

export default Navbar
