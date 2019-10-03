import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import FetchPosts from "../FetchPosts/FetchPosts";
import ForumTopicList from "../ForumTopicList/ForumTopicList";
import "./Forum.scss";

const Forum = () => {
  const userContext = useContext(UserContext);
  const { setRoute, setTopic } = userContext;

  return (
    <div className="forum__container">
      <div className="forum__container--top">
        <div className="forum__header">
          <span className="forum__header--title">Forums</span>
          <button
            className="forum__header--button"
            onClick={() => setRoute("createPost")}
          >
            Create a Post
          </button>
        </div>
      </div>

      <div className="forum__container--bottom">
        <div className="forum__overview">
          <FetchPosts topic={"general"} size="small" />
          <FetchPosts topic={"music"} size="small" />
          <FetchPosts topic={"recreational"} size="small" />
          <FetchPosts topic={"fitness"} size="small" />
          <FetchPosts topic={"tech"} size="small" />
          <FetchPosts topic={"other"} size="small" />
        </div>

        <ForumTopicList />
      </div>
    </div>
  );
};

export default Forum;
