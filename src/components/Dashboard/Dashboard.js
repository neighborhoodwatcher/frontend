import React, { useContext } from 'react'

import UserContext from '../../context/userContext'
import './Dashboard.scss'

const Dashboard = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="dashboard-container">
            <div className="dashboard-top">
                <img className="dashboard-img" src={userContext.userState.user.photoURL} />
                <div className="dashboard-nav">
                    <h3 className="dashboard-hello">Hello,</h3>
                    <h2 className="dashboard-displayname">{userContext.userState.user.displayName}</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
