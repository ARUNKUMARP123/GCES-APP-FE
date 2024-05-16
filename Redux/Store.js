import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./Reducers/Auth.Reducer";


export default configureStore({
    reducer:{
        Auth:AuthReducer,
    },
});