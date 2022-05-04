import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats: [],
    // catForUpdate: null,
}
const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: ((state, action) =>{
            const {name} = action.payload;
            const newCat = { name, id: new Date().getTime()};
            state.cats.push(newCat)
            }),
        delCat: (((state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id );
            state.cats.splice(index, 1);
        }))
    }
})
const { reducer, actions: {addCat, delCat}} = catSlice;
export default reducer;
export const actionsCat = {
    addCat,
    delCat
}