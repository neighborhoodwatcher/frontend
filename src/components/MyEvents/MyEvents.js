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

  {console.log(data)}
  if(loading) {
      return (<h1>Loading...</h1>)
  }
  return (
    <div className="my_events_container">
      <span className="my_events_title">My Events</span>
      <hr className="my_events_line" />
      {/* Individual Event Card */}
      <div>
        {data.events.slice(0, 5).map(event => (
          <div>
            <p>{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
