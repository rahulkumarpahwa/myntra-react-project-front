import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
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


const itemsSlice = createSlice({
  name: "items",
  initialState: [], 
  reducers : {
    
  } 

})



export const store = configureStore({
  reducer: { cart: cartSlice.reducer, items: itemsSlice.reducer },
});

export const { addItem, removeItem } = cartSlice.actions;
export const {} = itemsSlice.reducer;
