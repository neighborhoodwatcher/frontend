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
    <div className="posts__large">
      <div className="posts__large--container">
      <div>{post.body}</div>
        <div className="posts__large--info">
          <div className="posts__large--infoUser">{post.user.displayName}</div>
          <div className="posts_large--infoDate">{post.created_at}</div>
        </div>
      </div>
    </div>
  );
};

export default FetchPost;
