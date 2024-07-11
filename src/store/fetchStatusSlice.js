import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false means "Pending" and true means "Done"
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchingStarted: (state) => {
      state.currentlyFetching = true; 
    },
    fetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const { markFetchDone, fetchingStarted, fetchingFinished } = fetchStatusSlice.actions;

// context : when we start fetching data from api then we will set the currentlyFetching to true and when fetching is complete we will set it false. Also the fetchDone is initially false and if we get the required data from api we we will set it true otherwise we will remain it false.  