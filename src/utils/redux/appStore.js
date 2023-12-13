import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "./cartSlice";

const appStore = configureStore({
    reducers: {
        cart: cartReducer
    }
});

export default appStore;