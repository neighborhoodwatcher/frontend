import React from 'react'

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const FetchPosts = ({ topic }) => {
    const GET_POSTS = gql`
    query getPosts($topic: String!){
        posts(where: {topic: {_ilike: $topic}}, limit: 3) {
            title
            body
            topic
        }
    }`;

    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: {topic}
    });

    return (
        <div>
            <h3 className="forum__overview--header">{topic}</h3>
            {loading ? (<h2>Loading...</h2>) : (
                data.posts.map(post => (
                    <div className="forum__overview--topic">
                        <hr className="forum__overview--line" />
                        <div className="forum__overview--post">
                            <div>
                                {post.title}
                            </div>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default FetchPosts
