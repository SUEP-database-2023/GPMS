import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import ApiReducer from "./ApiSlice";
import TeacherSubmmitFromReducer from "./TeacherSubmmitFromSlice";
import TimeReducer from "./TimeSlice";
import StudentChoiceReducer from "./StudentChoiceSlice";
import StudentTopicDetailReducer from "./StudentTopicDetailSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    api: ApiReducer,
    TeacherSubmitForm: TeacherSubmmitFromReducer,
    time: TimeReducer,
    StudentChoice: StudentChoiceReducer,
    StudentTopicDetail: StudentTopicDetailReducer,
  },
});

export default store;
