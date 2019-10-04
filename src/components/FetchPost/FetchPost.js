import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./FetchPost.scss";
import UserContext from "../../context/userContext";

const FetchPost = () => {
  const userContext = useContext(UserContext);
  const postID = userContext.userState.postID;

  const GET_POST = gql`
    query getPost($post_id: Int!) {
      posts(where: { id: { _eq: $post_id } }) {
        title
        body
        topic
        created_at
        user {
          displayName
          photo_URL
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { post_id: postID }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const post = data.posts[0];
  return (
    <div className="post__large">
      <div className="post__large--container">
        <img
          src={post.user.photo_URL}
          alt="User Avatar"
          className="post__large--image"
        />
        <div className="post__large--info">
          <div className="post__large--infoUser">{post.user.displayName}</div>
          <div className="post__large--infoDate">{post.created_at}</div>
        </div>
        <div className="post__large--body">{post.body}</div>
      </div>
    </div>
  );
};

export default FetchPost;
