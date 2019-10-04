import gql from 'graphql-tag'

export const CREATE_USER = gql`
    mutation createUser ($uid: String!, $displayName: String!, $email: String!, $latitude: float8, $longitude: float8, $photo_URL: String) {
            insert_users(objects: {uid: $uid, displayName: $displayName, email: $email, latitude: $latitude, longitude: $longitude, photo_URL: $photo_URL}) {
                affected_rows
        }
}`
