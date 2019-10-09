import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./LocalEvents.scss";
import UserContext from "../../context/userContext";
import { GET_EVENTS } from "../../utils/GraphQL";

const LocalEvents = () => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  // const GET_EVENTS = gql`
  //   {
  //     events {
  //       title
  //       description
  //       topic
  //     }
  //   }
  // `;

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
      <div className="localEvents__container--bottom">
        <div className="localEvents__upcomingEvents">
          <h3 className="localEvents__upcomingEvents--header">
            UPCOMING EVENTS
          </h3>
          <div className="localEvents__upcomingEvents--events">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              data.events.map(event => (
                <div className="localEvents__event">
                  <img
                    src="https://api.adorable.io/avatars/285/abott@adorable.png"
                    alt="User Avatar"
                    className="localEvents__event--image"
                  />
                  <div className="localEvents__event--title">{event.title}</div>
                  <div className="localEvents__event--info">
                    <div className="localEvents__event--infoLocation">
                      LOCATION
                    </div>
                    <div className="localEvents__event--infoDate">DATE</div>
                  </div>

                  <div className="localEvents__event--description">
                    {event.description}
                  </div>
                  <div className="localEvents__event--topic">
                    #{event.topic}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="localEvents__recentDiscussions">
          <h3 className="localEvents__recentDiscussions--header">
            RECENT DISCUSSIONS
          </h3>
          <div className="localEvents__recentDiscussions--discussions"></div>
        </div>
      </div>
    </div>
  );
};

export default LocalEvents;
