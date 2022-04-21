import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";

const UserDetail = () => {

    const {id} = useParams();
    const {state} = useLocation();
    const [user, setUser] = useState([]);

    useEffect(() => {
        if(state) {
            setUser(state);
            return;
        }
        userService.getUser(id).then(({data}) => setUser({...data}))
    }, [id])
    return (
        <div>
            {
                <div>
                    id: {user.id}<br/>
                    name: {user.name}<br/>
                    username: {user.username}<br/>
                    email: {user.email}<br/>
                    address:<br/>
                    street: {user.address?.street}<br/>
                    suite: {user.address?.suite}<br/>
                    city: {user.address?.city}<br/>
                    zipcode: {user.address?.zipcode}<br/>
                    lat: {user.address?.geo.lat}<br/>
                    lng: {user.address?.geo.lng}<br/>
                    phone:  {user.phone}<br/>
                    website:  {user.website}<br/>
                    company: <br/>
                    name:  {user.company?.name}<br/>
                    catchPhrase:  {user.company?.catchPhrase}<br/>
                    bs:  {user.company?.bs}<br/>

                    <Link to={'posts'}>
                        <button key={user.id} style={{borderRadius: '20px', margin: '7px'}}>
                            user posts
                        </button>
                    </Link>
                </div>
            }
            <div style={{marginLeft:'-300px', marginTop:'20px'}}>
                <Outlet/>
            </div>
        </div>
    );
};
export {UserDetail};