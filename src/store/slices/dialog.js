import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  desc: "",
  cb: null,
  Form: null,
  children: null,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state, action) => ({ ...action.payload, isOpen: true }),
    closeDialog: () => initialState,
  },
});

export default dialogSlice.reducer;
export const { openDialog, closeDialog } = dialogSlice.actions;
