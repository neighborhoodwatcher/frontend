import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../../context/userContext";
import firebase from "firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userContext = useContext(UserContext);
  const { isLoggedIn } = userContext.userState;
  const { login } = userContext;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        login(user);
      }
    });
  }, []);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn === true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
