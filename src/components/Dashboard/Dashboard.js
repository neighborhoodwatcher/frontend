import React, { useContext } from "react";

import UserContext from "../../context/userContext";
import Navbar from "../Navigation/Navbar";
import "./Dashboard.scss";
import MyEvents from '../MyEvents/MyEvents'
import MyMarkers from '../MyMarkers/MyMarkers'

const Dashboard = () => {
  const userContext = useContext(UserContext);
  const userID = userContext.userState.user.uid

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

      <div className="dashboard__bottom">
        <MyEvents userID={userID}/>
        <MyMarkers />
      </div>
    </div>
  );
};

export default Dashboard;
