import React, { useContext } from 'react'

import UserContext from '../../context/userContext'
import './Dashboard.scss'
import Navbar from '../Navigation/Navbar'

const Dashboard = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="dashboard-container">
            <div className="dashboard-top">
                <img className="dashboard-img" src={userContext.userState.user.photoURL} />
                <div className="dashboard-nav">
                    <p className="dashboard-hello">Hello,</p>
                    <p className="dashboard-displayname">{userContext.userState.user.displayName}</p>
                    <hr className="horizontal-line" />
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
