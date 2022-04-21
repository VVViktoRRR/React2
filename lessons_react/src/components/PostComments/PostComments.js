import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";

const PostComments = () => {
    const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(()=> {
        postService.getByPostComments(id).then(({data}) => setComments(data))
    }, [id])
    return (
        <div>
            <h2>Post Comments:</h2>
            <hr></hr>
                <div>
                    {
                        comments.map(comment => <div key={comment.id}>
                            <h4>postId: {comment.postId}</h4>
                            <h4>id:  {comment.id}</h4>
                            <h4>name: {comment.name}</h4>
                            <h4>email: {comment.email}</h4>
                            <h4> body: {comment.body}</h4> <hr></hr>
                        </div>)
                    }
                </div>
            </div>
    );
};

export {PostComments};