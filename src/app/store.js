// Store:
// the store holds all of the applications state
// the store also holds all the reducers (reducers produce the state)
// a store folder can be created, and different store files can be created
// ie: store for auth, clients, etc
// all of the reducers are imported here


import { configureStore } from "@reduxjs/toolkit";
// counterReducer (reducer) is imported below 
// line below imports the slices (note that the name does not matter, only
// the file location matters)
import counterReducer from "../features/counter/counterSlice.js";

export default configureStore({
  reducer: {
    counters: counterReducer,
  },
});
