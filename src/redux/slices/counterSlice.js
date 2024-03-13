import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isDarkTheme: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count++;
    },
    decrease: (state, action) => {
      state.count > 0 && state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { increase, decrease, setCount, toggleTheme } =
  counterSlice.actions;

export default counterSlice.reducer;
