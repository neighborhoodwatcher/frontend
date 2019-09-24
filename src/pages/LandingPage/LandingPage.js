import React, { useContext } from "react";

import firebase from "../../firebase/firebaseUtils";
import UserContext from "../../context/userContext";
import "firebase/auth";
import "./LandingPage.scss"

const LandingPage = () => {
  const userContext = useContext(UserContext);

  const { login } = userContext;

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const signInWithGoogle = () =>
    auth.signInWithPopup(provider).then(result => {
      login(result.user);
      console.log("signin", userContext);
    });

  return (
    <div>
      <h2 className="landing-title" >City Watch</h2>
      <h1 className="landing-motto">What's happening in<br />YOUR CITY?</h1>
      <div className="button-container">
        <button className="landing-button" onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
