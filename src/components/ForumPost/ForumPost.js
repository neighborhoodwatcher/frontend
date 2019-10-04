import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import ForumTopicList from "../ForumTopicList/ForumTopicList";
import FetchPost from "../FetchPost/FetchPost";
import FetchPostComments from "../FetchPostComments/FetchPostComments";
import "./ForumPost.scss";

const ForumPost = ({ topic, postTitle }) => {
  const userContext = useContext(UserContext);
  const { setRoute, setTopic } = userContext;

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
          <div className="forumPost__header--directory">
            <span
              className="forumPost__header--topic"
              onClick={() => {
                setRoute("forumTopic");
                setTopic(topic);
              }}
            >
              #{topic}
            </span>
            <span> > </span>
            <span>{postTitle}</span>
          </div>
        </div>
      </div>

      <div className="forumPost__container--bottom">
        <div className="forumPost__discussion">
          <FetchPost />
          <div className="forumPost__discussion--comments">
            <FetchPostComments />
          </div>
        </div>

        <ForumTopicList />
      </div>
    </div>
  );
};

export default ForumPost;
