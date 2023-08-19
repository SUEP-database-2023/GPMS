import { createSlice } from "@reduxjs/toolkit";
import TeacherApi from "../../components/Api/TeacherApi";
const initialState = {
  name: "name",
  type: "type",
  nature: "nature",
  major: "major",
  background: false,
  bgid: "",
  other: "other",
  body: "简介",
  note: "",
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
    setNature: (state, action) => {
      state.nature = action.payload;
    },
    setMajor: (state, action) => {
      state.major = action.payload;
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
      return {
        ...action.payload,
      };
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
} = teacherSubmitFormSlice.actions;

export default teacherSubmitFormSlice.reducer;
