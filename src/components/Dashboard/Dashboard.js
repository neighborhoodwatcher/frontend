import React, { useContext } from 'react'

import UserContext from '../../context/userContext'
import './Dashboard.scss'

const Dashboard = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="dashboard-container">
            <h1>{userContext.userState.user.displayName}</h1>
        </div>
    )
}

export default Dashboard
