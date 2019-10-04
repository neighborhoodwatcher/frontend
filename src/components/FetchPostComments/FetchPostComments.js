import React, {useContext} from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import UserContext from "../../context/userContext";
import "./FetchPostComments.scss";

const FetchPostComments = () => {
  const userContext = useContext(UserContext);
  const postID = userContext.userState.postID;

  const GET_POST_COMMENTS = gql`
    query getPostComments($post_id: Int!) {
      post_comments(where: { post_id: { _eq: $post_id } }) {
        text
        date
        user {
          displayName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST_COMMENTS, {
    variables: { post_id: postID }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="comment__large">
      {data.post_comments.map(postComment => (
        <div className="comment__large--container">
          <img
            src="https://api.adorable.io/avatars/285/abott@adorable.png"
            alt="User Avatar"
            className="comment__large--image"
          />
          <div className="comment__large--info">
            <div className="comment__large--infoUser">{postComment.user.displayName}</div>
            <div className="comment__large--infoDate">{postComment.date}</div>
          </div>
          <div className="comment__large--body">{postComment.text}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchPostComments;
