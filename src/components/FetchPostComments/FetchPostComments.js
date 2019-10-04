import React from "react";

import "./FetchPostComments.scss";

const FetchPostComments = () => {
  return (
    <div className="comment__large">
      <div className="comment__large--container">
        <img
          src="https://api.adorable.io/avatars/285/abott@adorable.png"
          alt="User Avatar"
          className="comment__large--image"
        />
        <div className="comment__large--info">
          <div className="comment__large--infoUser">displayName</div>
          <div className="comment__large--infoDate">date</div>
        </div>
        <div className="comment__large--body">body</div>
      </div>
    </div>
  );
};

export default FetchPostComments;
