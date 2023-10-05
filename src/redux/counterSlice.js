import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : 0,
    reducers : {
        incFn(state){
           return state+=1
        },
        decFn(state){
           return state-=1
        }
    }
})

export const {incFn,decFn} = counterSlice.actions;
export default counterSlice.reducer;