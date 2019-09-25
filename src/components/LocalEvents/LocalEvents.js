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
        <div className="local-events-container">
          <div className="local-left-container">
            <div>
              <h3>Test</h3>
            </div>
            <div className="local-events">
                {loading ? <h1>Loading...</h1> : data.events.map(event => (
                    <div className="events-container">
                        <p>{event.title}</p>
                        <p>{event.genre}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <button className="button-local">CREATE EVENT</button>
          </div>
        </div>
    )
}

export default LocalEvents
