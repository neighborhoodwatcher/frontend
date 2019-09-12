import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import UserContext from "../context/userContext";
import GMap from "../components/GMap/GMap";
import Navbar from "../components/Navigation/Navbar";
import SignIn from "./SignIn/SignIn";

const HomePage = () => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, coordinates } = userContext.userState;
  const { login, setCoordinates } = userContext;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        login(user);
        getLocationOfUser();
      }
    });
  }, []);

  const getLocationOfUser = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  };

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
          coords={coordinates}
        ></GMap>
      </div>
    );
};

export default HomePage;
