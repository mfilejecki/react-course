import { createSlice } from "@reduxjs/toolkit";

const initialUIState = { cartIsVisible: false, notification: null };

const uiReducer = createSlice({
  name: "cart",
  initialState: initialUIState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
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

export const uiActions = uiReducer.actions;
export default uiReducer.reducer;
