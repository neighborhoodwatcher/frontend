import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import UserContext from "../../context/userContext";
import "./FetchPosts.scss";

const FetchPosts = ({ topic, size }) => {
  const userContext = useContext(UserContext);
  const { setRoute, setTopic, setPostID } = userContext;

  const GET_POSTS = gql`
    query getPosts($topic: String!) {
      posts(where: { topic: { _ilike: $topic } }) {
        title
        body
        topic
        created_at
        id
        user {
          displayName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { topic }
  });

  if (size === "small") {
    return (
      <div className="posts__small">
        <span
          className="posts__small--topic"
          onClick={() => {
            setRoute("forumTopic");
            setTopic(topic);
          }}
        >
          #{topic}
        </span>
        <hr className="posts__small--line" />

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data.posts.slice(0, 3).map(post => (
            <div
              className="posts__small--container"
              onClick={() => {
                setRoute("forumPost");
                setTopic(topic);
                setPostID(post.id);
              }}
            >
              {console.log(post.id)}
              <div className="posts__small--title">{post.title}</div>
              <div className="posts__small--info">
                <div className="posts__small--infoUser">
                  {post.user.displayName}
                </div>
                <div className="posts_small--infoDate">{post.created_at}</div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  } else {
    return (
      <div className="posts__large">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data.posts.map(post => (
            <div className="posts__large--container">
              <div className="posts__large--title">{post.title}</div>
              <div className="posts__large--info">
                <div className="posts__large--infoUser">
                  {post.user.displayName}
                </div>
                <div className="posts_large--infoDate">{post.created_at}</div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
};

export default FetchPosts;
