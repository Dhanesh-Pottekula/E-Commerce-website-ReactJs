import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../fetures/product/ProductSlice";
import authReducer from '../auth/AuthSlice'
export const store = configureStore({
    reducer:{
        product:productReducer,
        auth:authReducer,
    }
})