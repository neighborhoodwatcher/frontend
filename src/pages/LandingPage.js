import React, { useContext } from "react";

import firebase from "../firebase/firebaseUtils";
import UserContext from "../context/userContext";
import "firebase/auth";

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
      <h1>Landing Page</h1>
      <button className="google-button" onClick={signInWithGoogle}>
        Sign-In
      </button>
    </div>
  );
};

export default LandingPage;
