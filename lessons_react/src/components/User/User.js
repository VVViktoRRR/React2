import React from 'react';

const User = ({user, getUser}) => {
    let {id, name} = user;
    return (
        <div style={{margin:'5px'}}>
           {id})- {name}
           <button style={{marginLeft:'10px', borderRadius:'20px'}} onClick={()=> getUser(user)}> user info </button>
        </div>
    );
};

export {User};