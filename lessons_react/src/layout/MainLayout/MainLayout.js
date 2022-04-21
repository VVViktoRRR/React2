import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {UserPosts} from "../../components";

const MainLayout = () => {
    return (
           <div>
               <div className={css.wrap}>
                   <NavLink to="/home" >Home </NavLink>
                   <NavLink to="/users" >Users </NavLink>
                   <NavLink to="/posts" >Posts </NavLink>
               </div>
               <Outlet/>
           </div>
    );
};

export {MainLayout};