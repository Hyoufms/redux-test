// this is to create action object
import { INCREMENT, DECREMENT } from "./constant";
/*
function createIncrementAction (data) {
    return {type:'increment', data}
}
function createDecrementAction (data) {
    return {type:'decrement', data}
}
*/
//sync action
export const createIncrementAction = data => ({type:INCREMENT, data});
export const createDecrementAction = data => ({type:DECREMENT, data});

//Async action means that the value of action is a function
//In async action, sync action usually be called
export const createAsyncIncrementAction = (data, time) => {
    return (dispatch) => {
       setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time) 
    }
}