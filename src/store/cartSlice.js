import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      //here state is mutable.
      // return state = [...state, action.payload];
      //or
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((value) => value != action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
