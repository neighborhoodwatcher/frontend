import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import UserContext from "../../context/userContext";

import "./CreatePost.scss";

const CreatePost = () => {
  const [titleState, setTitleState] = useState("");
  const [bodyState, setBodyState] = useState("");
  const [topicState, setTopicState] = useState("");
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  const CREATE_POST = gql`
    mutation createPost(
      $title: String!
      $body: String!
      $topic: String!
      $user_id: String!
    ) {
      insert_posts(
        objects: {
          title: $title
          body: $body
          topic: $topic
          user_id: $user_id
        }
      ) {
        affected_rows
      }
    }
  `;

  const [insert_posts] = useMutation(CREATE_POST);
  const uid = userContext.userState.user.uid;

  const createPost = (insert_posts, titleState, bodyState, topicState, uid) => {
    if (titleState && bodyState && topicState) {
      insert_posts({
        variables: {
          title: titleState,
          body: bodyState,
          topic: topicState,
          user_id: uid
        }
      });
    } else {
      alert("You must fill in everything punk");
    }
    setTitleState("");
    setBodyState("");
    setTopicState("");

    setRoute("forum");
  };

  return (
    <div className="createPost__container">
      <div className="createPost__container--top">
        <div className="createPost__header">
          <span
            className="createPost__header--forum"
            onClick={() => {
              setRoute("forum");
            }}
          >
            Forums
          </span>
          <span className="createPost__header--create">Create a Post</span>
        </div>
        <button
          className="createPost__header--button"
          onClick={() =>
            createPost(insert_posts, titleState, bodyState, topicState, uid)
          }
        >
          Submit
        </button>
      </div>

      <div className="createPost__container--bottom">
        <div className="createPost__form">
          <div>
            <p className="createPost__form--field">Topic</p>
            <select
              onChange={e => setTopicState(e.target.value)}
              className="createPost__form--dropdown"
              value={topicState}
            >
              <option>Pick One</option>
              <option value="General">General</option>
              <option value="Music">Music</option>
              <option value="Recreational">Recreational</option>
              <option value="Fitness">Fitness</option>
              <option value="Tech">Tech</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <p className="createPost__form--field">Title</p>
            <input
              onChange={e => setTitleState(e.target.value)}
              className="createPost__form--input"
              value={titleState}
            />
          </div>
          <div>
            <p className="createPost__form--field">Body</p>
            <textarea
              onChange={e => setBodyState(e.target.value)}
              className="createPost__form--textarea"
              value={bodyState}
            />
          </div>
        </div>
        {/* <div className="post-right-container"> */}

        {/* </div> */}
      </div>
    </div>
  );
};

export default CreatePost;
