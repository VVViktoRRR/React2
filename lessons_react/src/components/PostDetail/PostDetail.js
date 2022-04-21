import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";

const PostDetail = () => {

    const [post, setPost] = useState([]);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(()=> {
        if(state) {
            setPost(state);
            return;
        }
        postService.getPostById(id).then(({data}) => setPost(data))
    }, [id])
    return (
        <div style={{marginLeft: '30px'}}>
            <div>
                <h2>Post Details:</h2>
            </div>
            <div>
                <b>userId:</b> {post.userId}<br/>
                <b>id:</b> {post.id}<br/>
                <b>title:</b> {post.title}<br/>
                <b>body: </b> {post.body}<br/>
                <Link to={'comments'}>
                    <button key={post.id} style={{borderRadius: '20px', margin: '7px'}}>
                        Post Comments
                    </button></Link>
                <hr/>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetail};