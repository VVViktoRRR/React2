import React, {useEffect, useState} from 'react';
import {postsServices} from "../../services";

const Posts = ({postId}) => {
    const [posts, setPosts] = useState( [])

    useEffect(() => {
        postsServices.getPostsById(postId).then(({data}) => setPosts(data));
    }, [postId]);
    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>
                    userId: {post.userId} <br/>
                    id: {post.id} <br/>
                    title: {post.title} <br/>
                    body: {post.body} <br/>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export {Posts};