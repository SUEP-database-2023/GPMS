import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ApiReducer from "./ApiSlice";
import TeacherSubmmitFromReducer from "./TeacherSubmmitFromSlice";
import TimeReducer from "./TimeSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    api: ApiReducer,
    TeacherSubmitForm: TeacherSubmmitFromReducer,
    time: TimeReducer,
  },
});

export default store;
