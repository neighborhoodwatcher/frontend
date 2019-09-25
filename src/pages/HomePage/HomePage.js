import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";
import "firebase/auth";

import UserContext from "../../context/userContext";
import GMap from "../../components/GMap/GMap";
import SignIn from "../SignIn/SignIn";
import ActivityContainer from '../../components/ActivityContainer/ActivityContainer'

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const HomePage = () => {
  const userContext = useContext(UserContext);
  const { isLoggedIn, coordinates } = userContext.userState;
  const { login } = userContext;

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        login(user);
      }
    });
  }, []);

  // Apollo query
  const GET_USERS = gql`
    {
      users {
        displayName
        area_code
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  if (!isLoggedIn) {
    return <SignIn />;
  } else if (loading) return <div>Loading...</div>;
  return (
    <div>
      <GMap
        isMarkerShown={true}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `45vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        coords={coordinates}
      ></GMap>
      <ActivityContainer />
    </div>
  );
};

export default HomePage;
