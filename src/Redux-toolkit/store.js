import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";


//it takes object 
export const store= configureStore({
    reducer:{
       cart: cartSlice
    }
})