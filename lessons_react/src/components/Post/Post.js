import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,body} = post;
    return (
                <div>
                    <b>body:</b>{body}<br/>
                    <Link to={id.toString()} state={post}>
                        <button style={{borderRadius:'20px', marginLeft:'350px', marginBottom:'20px'}}>
                            post details </button>
                    </Link>
                    <hr/>
                </div>
        );
};

export {Post};