import { TrophyOutlined } from "@ant-design/icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  // isDarkMode: true,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { changeDarkMode } = configSlice.actions;

export default configSlice.reducer;
