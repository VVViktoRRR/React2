import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catsReducer from './slices/catSlice'

const rootReducer = combineReducers({
    cats: catsReducer

})
export const store = configureStore({
    reducer: rootReducer
})