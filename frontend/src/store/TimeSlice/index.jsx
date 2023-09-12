import { createSlice } from "@reduxjs/toolkit";
import PublicApi from "../../components/Api/PublicApi";

const getRound = async () => {
  const storedToken = localStorage.getItem("access_token");
  if (storedToken) {
    const token = storedToken.replace(/"/g, "");
    const publicApi = new PublicApi({ token });
    const round = await publicApi.getRound();
    return round;
  }
};
const initialState = {
  round: await getRound(),
};

const TimeSlice = createSlice({
  name: "Time",
  initialState,
  reducers: {
    setRound: (state, action) => {
      state.round = action.payload;
    },
  },
});

export const { setRound } = TimeSlice.actions;

export default TimeSlice.reducer;
