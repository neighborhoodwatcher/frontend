import React, { useContext, useEffect } from "react";
import firebase from "firebase";
import "firebase/auth";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import UserContext from "../../context/userContext";
import Map from "../../components/Map/Map";
import ActivityContainer from "../../components/ActivityContainer/ActivityContainer";
import { CREATE_USER } from "../../utils/GraphQL";

const HomePage = () => {
  const userContext = useContext(UserContext);
  const { coordinates } = userContext.userState;
  const { login } = userContext;
  const user = userContext.userState.user;
  const userUID = userContext.userState.user.uid;
  const userLat = userContext.userState.coordinates.lat;
  const userLon = userContext.userState.coordinates.lng;
  const photoURL = userContext.userState.user.photoURL

  const [insert_users] = useMutation(CREATE_USER);

  // Apollo query
  const GET_USERS = gql`
    query getUsers($user_uid: String!) {
      users(where: { uid: { _ilike: $user_uid } }) {
        displayName
      }
    }
  `;

  console.log('usercontext', userContext);

  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { user_uid: userUID }
  });

  const createUserInDB = (data, insert_users) => {
    if (data && data.users.length === 0) {
      insert_users({
        variables: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          latitude: userLat,
          longitude: userLon,
          photo_URL: photoURL

        }
      });
    } else if (data && data.users.length > 0) {
      return;
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        login(user);
      }
    });
    createUserInDB(data, insert_users);
  }, []);

  return (
    <div>
      <Map
        isMarkerShown={true}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `45vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        coords={coordinates}
      />
      <ActivityContainer />
    </div>
  );
};

export default HomePage;
