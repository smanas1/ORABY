import counterReducer from "./counterSlice"
import  emailSlice  from './emailSlice';

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        counter:counterReducer,
        email:emailSlice
    }
})

export default store