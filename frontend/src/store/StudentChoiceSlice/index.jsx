import { createSlice } from "@reduxjs/toolkit";
import PublicApi from "../../components/Api/PublicApi";
import AdminApi from "../../components/Api/AdminApi";
import StudentApi from "../../components/Api/StudentApi";
const getRound = () => {
  const storedToken = localStorage.getItem("access_token");
  if (storedToken) {
    const token = storedToken.replace(/"/g, "");
    const adminApi = new AdminApi({ token });
    const round = adminApi.getRound();
    return round;
  }
};

const initialState = {
  first: false,
  second: false,
  third: false,
  fourth: false,
  firstchoice: "",
  secondchoice: "",
  thischoice: "",
  fourthchoice: "",
};

const StudentChoiceSlice = createSlice({
  name: "StudentChoice",
  initialState,
  reducers: {
    setfirst: (state, action) => {
      state.first = !state.first;
    },
    setsecond: (state, action) => {
      state.second = !state.second;
    },
    setthird: (state, action) => {
      state.third = !state.third;
    },
    setfourth: (state, action) => {
      state.fourth = !state.fourth;
    },
    setfirstchoice: (state, action) => {
      state.firstchoice = action.payload.id;
    },
    setsecondchoice: (state, action) => {
      state.secondchoice = action.payload.id;
    },
    setthirdchoice: (state, action) => {
      state.thirdchoice = action.payload.id;
    },
    setfourthchoice: (state, action) => {
      state.fourthchoice = action.payload.id;
    },
    commit: (state, action) => {
      const storedToken = localStorage.getItem("access_token");
      if (storedToken) {
        const token = storedToken.replace(/"/g, "");
        const studentApi = new StudentApi({ token });
        studentApi.addSelections({
          choice1_id: state.firstchoice,
          choice2_id: state.secondchoice,
          choice3_id: state.thirdchoice,
          choice4_id: state.fourthchoice,
        });
      }
    },
  },
});
export const {
  setfirst,
  setsecond,
  setthird,
  setfourth,
  setfirstchoice,
  setsecondchoice,
  setthirdchoice,
  setfourthchoice,
  commit,
} = StudentChoiceSlice.actions;

export default StudentChoiceSlice.reducer;
