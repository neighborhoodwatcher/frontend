import React, { useState, useContext } from 'react'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import UserContext from '../../context/userContext'

import './CreateEvent.scss'

const CreateEvent = () => {
    const [titleState, setTitleState] = useState('')
    const [descriptionState, setDescriptionState] = useState('')
    const [genreState, setGenreState] = useState('')
    const userContext = useContext(UserContext)

    
    const CREATE_EVENT = gql`
        mutation createEvent ($title: String!, $description: String!, $genre: String!, $user_id: String!) {
            insert_events(objects: {title: $title, description: $description, genre: $genre, user_id: $user_id}) {
                affected_rows
        }
    }`

    const [insert_events] = useMutation(CREATE_EVENT)
    const uid = userContext.userState.user.uid

    const createEvent = (insert_events, titleState, descriptionState, genreState, uid) => {
        insert_events({variables:{title: titleState, description: descriptionState, genre: genreState, user_id: uid}})
        setTitleState('')
        setDescriptionState('')
        setGenreState('')
    }
    
    return (
            <div className="create-event-container">
                <input onChange={e => setTitleState(e.target.value)} value={titleState} />
                <input onChange={e => setDescriptionState(e.target.value)} value={descriptionState} />
                <input onChange={e => setGenreState(e.target.value)} value={genreState} />
                <button onClick={() => createEvent(insert_events, titleState, descriptionState, genreState, uid)}>Create Event
                </button>
            </div>
    )
}

export default CreateEvent
