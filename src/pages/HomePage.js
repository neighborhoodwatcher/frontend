import React, { useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import SignIn from "./SignIn";
import "firebase/auth";
import firebase from "firebase";
import Navbar from "../components/Navigation/Navbar";
import GMap from "../components/GMap/GMap";

const HomePage = () => {
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

  if (!isLoggedIn) {
    return <SignIn />;
  } else
    return (
      <div>
        <Navbar />
        <h1>{`Hello ${userContext.userState.user.displayName}`}</h1>
        <GMap
          isMarkerShown={false}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `50vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        ></GMap>
      </div>
    );
};

export default HomePage;
