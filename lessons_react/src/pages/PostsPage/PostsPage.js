import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Post} from "../../components";
import {postService} from "../../services";


const PostsPage = () => {

    const [posts, setPosts] = useState( []);

    useEffect(()=> {
        postService.getAllPosts().then(({data}) => setPosts(data));
    }, [])

    return (
            <div style={{display:'flex'}}>
                <div style={{width:'45%'}}>
                    <h2> Posts: </h2>
                    {
                        posts.map(post =><Post key={post.id} post={post}/>)
                    }
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
    );
};

export {PostsPage};