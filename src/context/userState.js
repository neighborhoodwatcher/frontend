import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";

const UserState = props => {
  const initialState = {
    user: {},
    isLoggedIn: false,
    coordinates: { lat: 0, lng: 0 }
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = result => {
    dispatch({
      type: "LOGIN",
      payload: result
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT"
    });
  };

  const setCoordinates = coordinates => {
    dispatch({
      type: "SET_COORDS",
      payload: coordinates
    });
  };

  return (
    <UserContext.Provider
      value={{
        userState: state,
        login,
        logout,
        setCoordinates
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
