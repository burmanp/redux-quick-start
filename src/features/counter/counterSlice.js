import { createSlice } from "@reduxjs/toolkit";
// A "slice" is a collection of Redux reducer logic and actions 
// for a single feature in your app, typically defined together 
//in a single file.

export const counterSlice = createSlice({
  name: "counters",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// actions are used in the component, hence exported 
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;
// the reducer is exported and imported into the stores
export default counterSlice.reducer;
