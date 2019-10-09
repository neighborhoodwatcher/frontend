import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import UserContext from "../../context/userContext";

import "./CreateEvent.scss";

import { GET_EVENTS } from "../../utils/GraphQL";

const CreateEvent = () => {
  const [titleState, setTitleState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [dateState, setDateState] = useState("");
  const [topicState, setTopicState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  const CREATE_EVENT = gql`
    mutation createEvent(
      $title: String!
      $description: String!
      $topic: String!
      $user_id: String!
    ) {
      insert_events(
        objects: {
          title: $title
          description: $description
          topic: $topic
          user_id: $user_id
        }
      ) {
        affected_rows
      }
    }
  `;

  const [insert_events] = useMutation(CREATE_EVENT);
  const uid = userContext.userState.user.uid;

  const createEvent = (
    insert_events,
    titleState,
    descriptionState,
    topicState,
    uid
  ) => {
    insert_events({
      variables: {
        title: titleState,
        description: descriptionState,
        topic: topicState,
        user_id: uid
      },
      refetchQueries: [{ query: GET_EVENTS }]
    });
    setTitleState("");
    setDescriptionState("");
    setTopicState("");
  };

  return (
    <div className="createEvent-container">
      <div className="createEvent__container--top">
        <div className="createEvent__header">
          <span className="createEvent__header--create">Create An Event</span>
        </div>
      </div>

      <div className="createEvent__container--bottom">
        <div className="createEvent__form">
          <div>
            <div>
              <p className="createEvent__form--field">Title</p>
              <input
                onChange={e => setTitleState(e.target.value)}
                className="createEvent__form--input"
                value={titleState}
              />
            </div>
            <div>
              <p className="createEvent__form--field">Location</p>
              <input
                onChange={e => setLocationState(e.target.value)}
                className="createEvent__form--input"
                value={locationState}
              />
            </div>
            <div>
              <p className="createEvent__form--field">Date</p>
              <input
                onChange={e => setDateState(e.target.value)}
                className="createEvent__form--input"
                value={dateState}
              />
            </div>
            <div>
              <p className="createEvent__form--field">Topic</p>
              <input
                onChange={e => setTopicState(e.target.value)}
                className="createEvent__form--input"
                value={topicState}
              />
            </div>
          </div>

          <div>
            <div>
              <p className="createEvent__form--field">Description</p>
              <textarea
                onChange={e => setDescriptionState(e.target.value)}
                className="createEvent__form--textarea"
                value={descriptionState}
              />
            </div>
            <button
              className="createEvent__form--button"
              onClick={() => {
                createEvent(
                  insert_events,
                  titleState,
                  descriptionState,
                  topicState,
                  uid
                );
                setRoute("homepage");
              }}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>

      {/* <input onChange={e => setTitleState(e.target.value)} value={titleState} />
      <input
        onChange={e => setDescriptionState(e.target.value)}
        value={descriptionState}
      />
      <input onChange={e => setTopicState(e.target.value)} value={topicState} /> */}
    </div>
  );
};

export default CreateEvent;
