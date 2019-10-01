import React, { useContext } from "react";

import "./LocalEvents.scss";
import UserContext from "../../context/userContext";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LocalEvents = () => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  const GET_EVENTS = gql`
    {
      events {
        title
        description
        genre
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_EVENTS);

  return (
    <div className="localEvents__container">
      <div className="localEvents__header">
        <div>
          <h3 className="localEvents__header--text">WHAT'S HAPPENING NEAR </h3>
          <span className="localEvents__header--city">LOS ANGELES?</span>
        </div>
        {/* <div> */}
        <button
          onClick={() => setRoute("createEvent")}
          className="localEvents__header--button"
        >
          CREATE EVENT
        </button>
        {/* </div> */}
      </div>
      <div className="localEvents__upcomingEvents">
        <h3 className="localEvents__upcomingEvents--header">UPCOMING EVENTS</h3>
        <div className="localEvents__upcomingEvents--events">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data.events.map(event => (
              <div className="events-container">
                <p>{event.title}</p>
                <p>{event.genre}</p>
                <p>{event.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="localEvents__recentDiscussions"></div>
    </div>
  );
};

export default LocalEvents;
