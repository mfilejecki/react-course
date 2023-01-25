import { createSlice } from "@reduxjs/toolkit";

const modalSliceInitialState = { modalIsOpen: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: modalSliceInitialState,
  reducers: {
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
    openModal: (state) => {
      state.modalIsOpen = true;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
