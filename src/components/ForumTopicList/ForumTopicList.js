import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import "./ForumTopicList.scss";

const ForumTopicList = () => {
  const userContext = useContext(UserContext);
  const { setRoute, setTopic } = userContext;

  return (
    <div className="topicList">
      <h3 className="topicList__header">Topic List</h3>
      <hr className="topicList__line" />
      <div className="topicList__topic">
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("general");
          }}
        >
          #General
        </h3>
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("music");
          }}
        >
          #Music
        </h3>
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("recreational");
          }}
        >
          #Recreational
        </h3>
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("fitness");
          }}
        >
          #Fitness
        </h3>
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("tech");
          }}
        >
          #Tech
        </h3>
        <h3
          onClick={() => {
            setRoute("forumTopic");
            setTopic("other");
          }}
        >
          #Other
        </h3>
      </div>
    </div>
  );
};

export default ForumTopicList;
