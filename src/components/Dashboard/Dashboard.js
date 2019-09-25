import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import Navbar from "../Navigation/Navbar";
import "./Dashboard.scss";

const Dashboard = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <img
          className="dashboard__top--userImg"
          src={userContext.userState.user.photoURL}
          alt="Profile Img"
        />

        <div className="dashboard__user">
          <p className="dashboard__user--hello">Hello,</p>
          <p className="dashboard__user--displayname">
            {userContext.userState.user.displayName}
          </p>
          <hr className="dashboard__user--line" />

          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
