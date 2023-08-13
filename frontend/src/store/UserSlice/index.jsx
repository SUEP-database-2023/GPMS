import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { whatIsMyRole } from "../../utils";

const storedTokenString = localStorage.getItem("access_token");
const identity = storedTokenString
  ? jwtDecode(JSON.parse(storedTokenString)).role
  : null;
const userid = storedTokenString
  ? jwtDecode(JSON.parse(storedTokenString)).id
  : null;
const storedToken = storedTokenString
  ? JSON.parse(storedTokenString).access_token
  : null;
const initialPath = whatIsMyRole({ identity });

const initialState = {
  access_token: storedToken || "", // 如果本地存储中有令牌，则使用本地令牌，否则为空字符串
  identity: identity || "",
  userid: userid || "",
  initialPath: initialPath || "/",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSlice: (state, action) => {
      state.access_token = action.payload;
      localStorage.setItem("access_token", JSON.stringify(state.access_token));
      state.identity = jwtDecode(action.payload).role;
      state.userid = jwtDecode(action.payload).id;
      state.initialPath = whatIsMyRole({ identity: state.identity });
    },
    clearUserSlice: (state) => {
      state.token = null;
      state.identity = null;
      state.userid = null;
      localStorage.removeItem("access_token");
    },
    
  },
});

export const { setUserSlice, clearUserSlice } = userSlice.actions;

export default userSlice.reducer;
