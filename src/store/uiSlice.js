import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
