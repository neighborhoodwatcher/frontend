import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import UserContext from "../../context/userContext";
import ForumTopicList from "../ForumTopicList/ForumTopicList";
import FetchPost from "../FetchPost/FetchPost";
import FetchPostComments from "../FetchPostComments/FetchPostComments";
import "./ForumPost.scss";

const ForumPost = ({ topic, postTitle }) => {
  const userContext = useContext(UserContext);
  const { setRoute, setTopic } = userContext;
  const postID = userContext.userState.postID;
  const userID = userContext.userState.user.uid

  const [comment, setComment] = useState("");

  const CREATE_POST_COMMENT = gql`
    mutation createPostComment($post_id: Int!, $text: String!, $user_id: String!) {
      insert_post_comments(
        objects: { post_id: $post_id, text: $text, user_id: $user_id }
      ) {
        affected_rows
      }
    }
  `;

  const [insert_post_comments] = useMutation(CREATE_POST_COMMENT);

  const createComment = (insert_post_comments, postID, comment, userID) => {
    insert_post_comments({variables: {
      post_id: postID, text: comment, user_id: userID
    }})
    setComment("")
  }

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
          <FetchPostComments className="forumPost__discussion--comments" />
          <div className="forumPost__form">
            <img
              src={userContext.userState.user.photoURL}
              alt="User Avatar"
              className="forumPost__form--image"
            />
            <input
              onChange={e => setComment(e.target.value)}
              className="forumPost__form--input"
              value={comment}
            />
            <button
              className="forumPost__form--button"
              onClick={() => createComment(insert_post_comments, postID, comment, userID)}
            >
              Add Comment
            </button>
          </div>
        </div>
        <ForumTopicList />
      </div>
    </div>
  );
};

export default ForumPost;
