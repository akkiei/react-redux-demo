import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      console.log("INC clicked");
      state.count++;
    },
    decrement(state, action) {
      state.count--;
    },
    addbyn(state, action) {
      state.count += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
const counterReducers = counterSlice.reducer;

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});

export default store;
