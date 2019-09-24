import React from 'react'

import "./LocalEvents.scss"

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LocalEvents = () => {
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

        <div className="local-events">
            <h3 className="events-message">
              WHAT'S HAPPENING NEAR <br/><h2 className="events-city-name">LOS ANGELES?</h2>
            </h3>
            <h3 className="events-upcoming-title">UPCOMING EVENTS</h3><hr className="line" />
            {loading ? <h1>Loading...</h1> : data.events.map(event => (
                <div>
                    <div className="events-title">
                        <p>{event.title}</p>
                        <p>{event.genre}</p>
                    </div>
                    <p className="event-description">{event.description}</p>
                </div>
            ))}
        </div>
    )
}

export default LocalEvents
