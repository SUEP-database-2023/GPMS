import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  access_token: "",
  identity: "",
  userid: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSlice: (state, action) => {
      state.access_token = action.payload;
      state.identity = jwtDecode(action.payload).role;
      state.userid = jwtDecode(action.payload).id;
      console.log(state.identity);
    },
    clearUserSlice: (state) => {
      state.token = null;
      state.identity = null;
      state.userid = null;
    },
  },
});

export const { setUserSlice, clearUserSlice } = userSlice.actions;

export default userSlice.reducer;
