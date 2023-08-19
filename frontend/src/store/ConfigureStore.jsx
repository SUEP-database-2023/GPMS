import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ApiReducer from "./ApiSlice";
import TeacherSubmmitFromReducer from "./TeacherSubmmitFromSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    api: ApiReducer,
    TeacherSubmitForm: TeacherSubmmitFromReducer,
  },
});

export default store;
