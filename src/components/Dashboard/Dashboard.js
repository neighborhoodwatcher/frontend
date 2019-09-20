import React, { useContext } from 'react'

import UserContext from '../../context/userContext'
import './Dashboard.scss'

const Dashboard = () => {
    const userContext = useContext(UserContext)

    return (
        <div className="dashboard-container">
            <h3>{userContext.userState.user.displayName}</h3>
        </div>
    )
}

export default Dashboard
