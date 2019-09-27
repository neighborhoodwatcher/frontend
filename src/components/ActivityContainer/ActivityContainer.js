import React, {useState, useContext} from 'react'

import "./ActivityContainer.scss"
import Dashboard from '../Dashboard/Dashboard'
import LocalEvents from '../LocalEvents/LocalEvents'
import CreateEvent from '../CreateEvent/CreateEvent'
import UserContext from "../../context/userContext";
import Forum from '../Forum/Forum'
import Settings from '../Settings/Settings'
import CreatePost from '../CreatePost/CreatePost'

const ActivityContainer = () => {
    const userContext = useContext(UserContext);
    console.log(userContext)
    const route = userContext.userState.route
    console.log('route', route)

    return (
        <div className="activity-container">
            <Dashboard />
            {route === "homepage" ? (
            <LocalEvents />) : "" }
            {route === "createEvent" ? (
            <CreateEvent />) : ""}
            {route === "forum" ? (
            <Forum />) : ""}
            {route === "createPost" ? (
            <CreatePost />) : ""}
            {route === "settings" ? (
            <Settings/>) : ""}
        </div>
    )
}

export default ActivityContainer