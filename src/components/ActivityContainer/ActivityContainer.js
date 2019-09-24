import React from 'react'

import "./ActivityContainer.scss"
import Dashboard from '../Dashboard/Dashboard'
import LocalEvents from '../LocalEvents/LocalEvents'
import CreateEvent from '../CreateEvent/CreateEvent'
import Forum from '../Forum/Forum'
import Settings from '../Settings/Settings'

const ActivityContainer = ({route}) => {
    return (
        <div className="activity-container">
            <Dashboard />
            {route === "homepage" ? (
            <LocalEvents />) : "" }
            {route === "createEvent" ? (
            <CreateEvent />) : ""}
            {route === "forum" ? (
            <Forum />) : ""}
            {route === "settings" ? (
            <Settings/>) : ""}
        </div>
    )
}

export default ActivityContainer