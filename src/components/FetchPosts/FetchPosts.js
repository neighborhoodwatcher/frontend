import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import "./FetchPosts.scss";

const FetchPosts = ({ topic }) => {
  const GET_POSTS = gql`
    query getPosts($topic: String!) {
      posts(where: { topic: { _ilike: $topic } }, limit: 3) {
        title
        body
        topic
        user {
          displayName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { topic }
  });

  return (
    <div className="posts__small">
      <span className="posts__small--topic">{topic}</span>
      <hr className="posts__small--line" />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.posts.map(post => (
          <div className="posts__small--container">
            <div className="posts__small--title">{post.title}</div>
            <div className="posts__small--user">{post.user.displayName}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchPosts;
