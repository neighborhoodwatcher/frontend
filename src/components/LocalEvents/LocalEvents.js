import React, { useContext } from 'react'

import "./LocalEvents.scss"
import UserContext from "../../context/userContext"

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const LocalEvents = () => {
    const userContext = useContext(UserContext)
    const { setRoute } = userContext

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
            <div className="local-headline">
              <h2>WHAT'S HAPPENING NEAR </h2> 
              <br /> 
              <h1 className="local-your-city">LOS ANGELES?</h1>
              <h3 className="local-upcoming">UPCOMING EVENTS</h3>
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
          <div className="local-right-container">
            <div className="button">
              <button onClick={() => setRoute("createEvent")} className="local-button">CREATE EVENT</button>
            </div>
          </div>
        </div>
    )
}

export default LocalEvents
