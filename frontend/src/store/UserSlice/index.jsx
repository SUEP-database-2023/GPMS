import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  identity: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setIdentity: (state, action) => {
      state.identity = action.payload;
    },
  },
});

export const { setToken, clearToken, setIdentity } = userSlice.actions;

export default userSlice.reducer;
