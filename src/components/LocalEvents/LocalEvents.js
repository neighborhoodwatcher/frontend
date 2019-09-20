import React from 'react'

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
        <div>
            {loading ? <h1>Loading...</h1> : data.events.map(event => (
                <div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p>{event.genre}</p>
                </div>
            ))}
        </div>
    )
}

export default LocalEvents
