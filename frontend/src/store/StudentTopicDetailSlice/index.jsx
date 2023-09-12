import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "name",
  body: "简介",
  note: "备注",
};

const StudentTopicDetailSlice = createSlice({
  name: "TeacherSubmitForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
    setAll: (state, action) => {
      console.log("state");
      // state.name = action.payload.name;
      // state.body = action.payload.synopsis;
      // state.note = action.payload.remark;
    },
  },
});

export const { setName, setAll, setBody, setNote } =
  StudentTopicDetailSlice.actions;

export default StudentTopicDetailSlice.reducer;
