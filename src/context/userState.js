import React, { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'

const UserState = props => {
    const initialState = {
        user: {},
        isLoggedIn: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)
    
    return (<UserContext.Provider 
        value={{
            userState: state
        }}
    >
        {props.children}
    </UserContext.Provider>
    )
}

export default UserState;