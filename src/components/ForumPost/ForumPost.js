import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import ForumTopicList from "../ForumTopicList/ForumTopicList";
import FetchPosts from "../FetchPosts/FetchPosts";

const ForumPost = ({ topic }) => {
  const userContext = useContext(UserContext);
  const { setRoute } = userContext;

  return (
    <div className="forumPost__container">
      <div className="forumPost__container--top">
        <div className="forumPost__header">
          <span
            className="forumPost__header--forum"
            onClick={() => {
              setRoute("forum");
            }}
          >
            Forums
          </span>
          <span className="forumPost__header--topic">#{topic}</span>
          <span className="forumPost__header--post">Name of post</span>
        </div>
      </div>

      <div className="forumPost__container--bottom">
        <FetchPosts topic={topic} size="large" />
        <ForumTopicList />
      </div>
    </div>
  );
};

export default ForumPost;
