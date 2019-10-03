import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import FetchPosts from "../FetchPosts/FetchPosts";

const ForumTopic = ({ topic }) => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  return (
    <div className="forumTopic__container">
      <div className="forumTopic__container--top">
        <div className="forumTopic__header">
          <span className="forumTopic__header--forum">Forums</span>
          <span className="forumTopic__header--topic">#{topic}</span>
        </div>
        <button
          className="forumTopic__header--button"
          onClick={() => setRoute("createPost")}
        ></button>
      </div>

      <div className="forumTopic__container--bottom">
        <FetchPosts topic={topic} />
        
      </div>
    </div>
  );
};

export default ForumTopic;
