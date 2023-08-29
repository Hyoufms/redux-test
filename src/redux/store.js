import {createStore} from 'redux';
import countReducer from './count_reducer';
// import { createSlice, configureStore } from '@reduxjs/toolkit'

export default createStore(countReducer)
// export default const store = configureStore({
//     reducer: 
// })