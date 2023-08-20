import { createSlice } from "@reduxjs/toolkit";
import TeacherApi from "../../components/Api/TeacherApi";
const initialState = {
  name: "name",
  type: "type",
  background: false,
  bgid: "",
  other: "other",
  body: "简介",
  note: "备注",
};

const teacherSubmitFormSlice = createSlice({
  name: "TeacherSubmitForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setBackground: (state, action) => {
      if (action.payload === "") {
        state.background = false;
        state.bgid = "";
      } else {
        state.background = true;
        state.bgid = action.payload;
      }
    },
    setOther: (state, action) => {
      state.other = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
    setNote: (state, action) => {
      state.note = action.payload;
    },
    setAll: (state, action) => {
      state.name = action.payload.name;
      state.type = action.payload.category;
      state.background = action.payload.whether_background;
      state.bgid = action.payload.have_bg_id;
      state.other = action.payload.have_bg_else;
      state.body = action.payload.synopsis;
      state.note = action.payload.remark;
      console.log("state.body", state.body);
    },
    commit: (state, action) => {
      const teacherApi = new TeacherApi(action.payload);
      const timestamp = new Date();
      const year = timestamp.getFullYear();
      //   TODO: grade的标准;
      teacherApi.AddTopic({
        name: state.name,
        whether_background: state.background,
        have_bg_id: state.bgid,
        have_bg_else: state.other,
        category: state.type,
        synopsis: state.body,
        remark: state.note,
        grade: year + 1,
      });
    },
    update: (state, action) => {
      const token = action.payload.token;
      const teacherApi = new TeacherApi({ token });
      const timestamp = new Date();
      const year = timestamp.getFullYear();
      //   TODO: grade的标准;
      teacherApi.UpdateTopic({
        topic_id: action.payload.topic_id,
        name: state.name,
        whether_background: state.background,
        have_bg_id: state.bgid,
        have_bg_else: state.other,
        category: state.type,
        synopsis: state.body,
        remark: state.note,
        grade: year + 1,
      });
    },
  },
});

export const {
  setName,
  setType,
  setNature,
  setMajor,
  setBackground,
  setOther,
  setAll,
  setBody,
  setNote,
  commit,
  update,
} = teacherSubmitFormSlice.actions;

export default teacherSubmitFormSlice.reducer;
