import React, { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'

const UserState = props => {
    const initialState = {
        user: {},
        isLoggedIn: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const login = result => {
        dispatch({
            type: "LOGIN",
            payload: result
        })
    }
    
    return (<UserContext.Provider 
        value={{
            userState: state,
            login
        }}
    >
        {props.children}
    </UserContext.Provider>
    )
}

export default UserState;