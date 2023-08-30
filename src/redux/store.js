import {createStore, applyMiddleware} from 'redux';
import countReducer from './reducers/count';
// import { createSlice, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';// for async action

export default createStore(countReducer, applyMiddleware(thunk))
// export default const store = configureStore({
//     reducer: 
// })