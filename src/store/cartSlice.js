import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      //here state is mutable.
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.filter((value) => value.id != action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
