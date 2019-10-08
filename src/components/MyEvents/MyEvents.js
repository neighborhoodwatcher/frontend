import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./MyEvents.scss";

const MyEvents = ({userID}) => {
  const GET_MY_EVENTS = gql`
    query getEvents($id: String!) {
      events(where: { user_id: { _eq: $id } }) {
        title
        description
        topic
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_MY_EVENTS, {
    variables: { id: userID }
  });

  if(loading) {
      return (<h1>Loading...</h1>)
  }
  return (
    <div className="my_events_container">
      <span className="my_events_title">My Events</span>
      <hr className="my_events_line" />
      <div>List of my events...</div>
      {console.log('data', data)}
    </div>
  );
};

export default MyEvents;
