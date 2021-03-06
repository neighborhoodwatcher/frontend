import React, { useReducer } from "react";
import UserContext from "./userContext";
import UserReducer from "./userReducer";

const UserState = props => {
  const initialState = {
    user: {},
    isLoggedIn: false,
    coordinates: { lat: 0, lng: 0 },
    route: "homepage"
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

  const setRoute = route => {
    dispatch({
      type: "SET_ROUTE",
      payload: route
    });
  };

  const setCoordinates = coordinates => {
    dispatch({
      type: "SET_COORDS",
      payload: coordinates
    });
  };

  const setTopic = topic => {
    dispatch({
      type: "SET_TOPIC",
      payload: topic
    });
  };

  const setPostID = postID => {
    dispatch({
      type: "SET_POSTID",
      payload: postID
    });
  };

  const setPostTitle = postTitle => {
    dispatch({
      type: "SET_POST_TITLE",
      payload: postTitle
    });
  };

  return (
    <UserContext.Provider
      value={{
        userState: state,
        login,
        logout,
        setRoute,
        setCoordinates,
        setTopic,
        setPostID,
        setPostTitle
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
