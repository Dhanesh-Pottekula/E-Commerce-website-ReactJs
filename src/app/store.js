import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../fetures/product/ProductSlice";
export const store = configureStore({
    reducer:{
        product:productReducer,

    }
})