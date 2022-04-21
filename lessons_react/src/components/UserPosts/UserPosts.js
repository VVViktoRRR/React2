import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services";

const UserPosts = () => {

    const [posts, setPosts] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        userService.getByUserPosts(id).then(({data}) => setPosts(data))
    }, [id])
    return (
        <div>
            <h3> User Posts: </h3>
            {
                posts && posts.map(post =>
                    <div key={post.id}>
                          <b>userId: </b> {post.userId}<br/>
                          <b>title: </b> {post.title}<br/>
                          <b>body: </b>  {post.body}<br/>
                    <hr/>
                    </div>
                )
            }
        </div>
    );
};

export {UserPosts};