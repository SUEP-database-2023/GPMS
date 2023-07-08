import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "http://localhost:8000",
};

const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    seturl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { seturl } = ApiSlice.actions;

export default ApiSlice.reducer;
