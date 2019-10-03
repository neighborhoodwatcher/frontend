import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import FetchPosts from "../FetchPosts/FetchPosts";
import ForumTopicList from "../ForumTopicList/ForumTopicList";
import "./ForumTopic.scss";

const ForumTopic = ({ topic }) => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  return (
    <div className="forumTopic__container">
      <div className="forumTopic__container--top">
        <div className="forumTopic__header">
          <span
            className="forumTopic__header--forum"
            onClick={() => {
              setRoute("forum");
            }}
          >
            Forums
          </span>
          <span className="forumTopic__header--topic">#{topic}</span>
        </div>
        <button
          className="forumTopic__header--button"
          onClick={() => setRoute("createPost")}
        >
          Create a Post
        </button>
      </div>

      <div className="forumTopic__container--bottom">
        <FetchPosts topic={topic} />
        <ForumTopicList />
      </div>
    </div>
  );
};

export default ForumTopic;
