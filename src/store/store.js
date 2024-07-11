import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./itemsSlice";
import { cartSlice } from "./cartSlice";
import { fetchStatusSlice } from "./fetchStatusSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});
