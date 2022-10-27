import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  uli: "",
  mobile: false,
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackground: (state, action) => {
      state.active = true;
      state.uri = action.payload;
    },
    mobileView: (state, action) => {
      state.mobile = action.payload;
    },
  },
});

export const { setBackground, mobileView } = backgroundSlice.actions;

export default backgroundSlice.reducer;
