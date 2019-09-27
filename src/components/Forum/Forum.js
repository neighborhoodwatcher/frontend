import React, {useContext} from 'react'

import UserContext from '../../context/userContext'
import "./Forum.scss"

const Forum = () => {
    const userContext = useContext(UserContext)
    const {setRoute} = userContext

    return (
        <div className="forum-container">
            <div className="forum-left-container">
                <div className="forum-left-contents">
                    <h3 className="forum-title">Forum</h3>
                </div>
            </div>
            <div className="forum-right-container">
                <div className="forum-right-contents">
                    <button className="forum-button" onClick={() => setRoute("createPost")}>Create a Post</button>
                </div>
            </div>
        </div>
    )
}

export default Forum