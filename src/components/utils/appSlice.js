import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenu: true,
  },

  reducers: {
    toggleMenu: (state, action) => {
      state.isMenu = !state.isMenu;
    },
  },
});

export default appSlice.reducer;

export const { toggleMenu } = appSlice.actions;
