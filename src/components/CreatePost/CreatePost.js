import React, { useState, useContext } from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import UserContext from '../../context/userContext'

import './CreatePost.scss'

const CreatePost = () => {
    const [titleState, setTitleState] = useState('')
    const [bodyState, setBodyState] = useState('')
    const [topicState, setTopicState] = useState('')
    const userContext = useContext(UserContext)

    const CREATE_POST = gql`
        mutation createPost ($title: String!, $body: String!, $topic: String!, $user_id: String!) {
            insert_posts(objects: {title: $title, body: $body, topic: $topic, user_id: $user_id}) {
                affected_rows
        }
    }`

    const [insert_posts] = useMutation(CREATE_POST)
    const uid = userContext.userState.user.uid

    const createPost = (insert_posts, titleState, bodyState, topicState, uid) => {
        if(titleState && bodyState && topicState) {
            insert_posts({variables:{title: titleState, body: bodyState, topic: topicState, user_id: uid}})
        } else {
            alert('You must fill in everything punk')
        }
        setTitleState('')
        setBodyState('')
        setTopicState('')
    }

    return (
        <div className="post-container">
            <div className="post-header">
                <h1>
                    CREATE A POST
                </h1>
            </div>
            <div className="post-body-container">
                <div className="post-left-container">
                    <div>
                        <p>Title</p>
                        <input 
                        onChange={e => setTitleState(e.target.value)} 
                        className="post-title"
                        value={titleState} />
                    </div>
                    <div>
                        <p>Body</p>
                        <textarea 
                        onChange={e => setBodyState(e.target.value)} 
                        className="post-body"
                        value={bodyState} />
                    </div>
                </div>
                <div className="post-right-container">
                    <div>
                        <p>Topic</p>
                        <select onClick={e => setTopicState(e.target.value)} className="post-select">
                            <option>Pick One</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Recreational">Recreational</option>
                            <option value="Sport">Sport</option>
                            <option value="Music">Music</option>
                        </select>
                    </div>
                    <button onClick={() => createPost(insert_posts, titleState, bodyState, topicState, uid)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
