
import { createSlice } from "@reduxjs/toolkit";
import { register } from "./actions";

const initialState = {
  user: {},
  pending: false,
  error: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.user = payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { addProducts } = authSlice.actions;

export default authSlice.reducer;
