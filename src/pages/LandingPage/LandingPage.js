import React, { useContext, useEffect } from "react";
import {useMutation} from '@apollo/react-hooks'

import firebase from "../../firebase/firebaseUtils";
import UserContext from "../../context/userContext";
import "firebase/auth";
import "./LandingPage.scss";
import CityWatchLogo from "../../assets/icons8-city-100.png";
import { CREATE_USER } from '../../utils/GraphQL'
import { create } from "domain";

const LandingPage = () => {
  const userContext = useContext(UserContext);
  const { login, setCoordinates } = userContext;

  const [insert_users] = useMutation(CREATE_USER)

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const signInWithGoogle = () =>
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      login(result.user);
      insert_users({variables: {uid: result.user.uid, displayName: result.user.displayName, email: result.user.displayName, latitude: 11.000, longitude: 12.000,}})
    });

  const getLocationOfUser = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoordinates({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  };

  useEffect(() => {
    getLocationOfUser();
  }, []);

  return (
    <div className="landing">
      <div className="landing__logo">
        <img
          src={CityWatchLogo}
          alt="CityWatch Logo"
          className="landing__logo--image"
        />
        <span className="landing__logo--text">City Watch</span>
      </div>

      <div className="landing__motto">
        <h2 className="landing__motto--smallText">What's happening in</h2>
        <h1 className="landing__motto--largeText">YOUR CITY?</h1>
      </div>

      <div className="button">
        <button className="button__landing" onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
