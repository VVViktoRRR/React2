import React from 'react';
import {useDispatch} from "react-redux";
import {actionsCat} from "../../redux/slices/catSlice";

const Cat = ({cat: {id, name}}) => {
 const dispatch = useDispatch();
 const delCats = () => {
     dispatch(actionsCat.delCat( {id}))
 }
    return (
        <div>
            {name}
            <button onClick={delCats}> delete / update </button>
        </div>
    );
};

export {Cat};