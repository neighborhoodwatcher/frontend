import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const HomePage = () => {
    const userContext = useContext(UserContext)

    const { isLoggedIn } = userContext.userState
    console.log(isLoggedIn)

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage