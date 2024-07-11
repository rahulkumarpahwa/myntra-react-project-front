import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      //  return state = [ ...(action.payload)];
      //or
      return action.payload;
    },
    filterItems: (state, action) => {
      // console.log(action);
      return action.payload;
    },
  },
});

export const { addInitialItems, filterItems } = itemsSlice.actions;
