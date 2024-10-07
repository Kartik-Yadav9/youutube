import { createSlice } from "@reduxjs/toolkit";

let initialState= []

const CartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {

        add(state,action){
            return [...state, action.payload ] // Adding a new product to the cart
        },


        remove(state, action){
            return state.filter(product=>product.id !== action.payload)
         }
    }
})

export default CartSlice.reducer;
export const {add, remove}= CartSlice.actions