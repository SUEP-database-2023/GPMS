import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ApiReducer from "./ApiSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    api: ApiReducer,
  },
});

export default store;
