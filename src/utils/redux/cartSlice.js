
import { createSlice } from '@reduxjs/toolkit';

const cartSlice =  createSlice( {
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clear: (state) => {
            // state.items = []; WONT WORK because in redux toolkit we need to mutate the state directly
            state.items.length = 0;
            // return {items:[]};  also works
        }
    }
} )

export const {addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;