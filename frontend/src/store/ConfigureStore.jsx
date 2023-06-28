import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ConfigReducer from "./ConfigSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    config: ConfigReducer,
  },
});

export default store;
