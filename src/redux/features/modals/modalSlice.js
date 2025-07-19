// redux/features/modal/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSuccess: false,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showSuccessModal: (state, action) => {
      state.showSuccess = true;
      state.message = action.payload || "Success!";
    },
    hideSuccessModal: (state) => {
      state.showSuccess = false;
      state.message = "";
    },
  },
});

export const { showSuccessModal, hideSuccessModal } = modalSlice.actions;
export default modalSlice.reducer;
