import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {User} from "../../components";
import {userService} from "../../services";

const UsersPage = () => {
    const [users, setUsers] = useState( []);
    useEffect( () => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, [])

    return (
           <div style={{display:'flex', flexWrap:'wrap'}}>
                <div>
                    <h2>Users:</h2>
                    {
                        users.map(user => <User key={user.id} user={user}  />)
                    }
                </div>
                <div style={{width:'60%', marginTop:'70px', marginLeft:'50px'}}>
                    <Outlet/>
                </div>
            </div>
    );
};

export {UsersPage};