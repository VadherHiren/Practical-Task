import UserReducer from "./UserReducer";
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        users:UserReducer
    }
})