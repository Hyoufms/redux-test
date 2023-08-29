// this is reducer function
import { INCREMENT, DECREMENT } from "./constant";
// import { CreateSlice } from "@reduxjs/toolkit";

const initState = 0;
export default function countReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}