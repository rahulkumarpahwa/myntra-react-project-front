import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
  name: "items",
  initialState: [
    {
      id: "007",
      image: "images/7.jpg",
      company: "The Indian Garage Co",
      item_name: "Men Slim Fit Regular Shorts",
      original_price: 1599,
      current_price: 639,
      discount_percentage: 60,
      return_period: 14,
      delivery_date: "10 Oct 2023",
      rating: {
        stars: 4.2,
        count: 388,
      },
    },
  ],
  reducers: {
    addInitialItems: (store) => {
      return store;
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;
