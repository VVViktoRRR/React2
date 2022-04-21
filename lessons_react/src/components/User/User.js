import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {UserPosts} from "../UserPosts/UserPosts";

const User = ({user}) => {
    const {id, name} = user

    return (
        <>
            <div>
                {id}.) {name}
                <Link to = {user.id.toString()} state={user}>
                    <button key={user.id} style={{borderRadius: '20px', margin: '7px'}}>
                            user info
                    </button>
                </Link>
            </div>
        </>
    );
};

export {User};