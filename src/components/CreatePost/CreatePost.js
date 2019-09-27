import React, { useState, useContext } from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import UserContext from '../../context/userContext'

import './CreatePost.scss'

const CreatePost = () => {
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
                        <input className="post-title" />
                    </div>
                    <div>
                        <p>Body</p>
                        <textarea className="post-body" />
                    </div>
                </div>
                <div className="post-right-container">
                    <div>
                        <p>Topic</p>
                        <select className="post-select">
                            <option>Pick One</option>
                            <option value="Fitness">Fitness</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
