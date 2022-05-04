import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsCat} from "../../redux/slices/catSlice";

const CatsForm = () => {


const catName = useRef();
const dispatch = useDispatch();
const addCats = () => {
    dispatch(actionsCat.addCat({name: catName.current.value}));
}
    return (
        <div>
            <label> Cat name <input type='text' ref = {catName}/> </label>
            <button onClick={addCats}> save </button>
        </div>
    );
};

export {CatsForm};