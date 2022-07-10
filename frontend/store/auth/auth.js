import { createSlice } from '@reduxjs/toolkit';
import { register } from './actions';

const initialState = {
  user: null,
  pending: false,
  error: false,
  errorMessage: null,
  success: null,
};

export const authSlice = createSlice({
  name: 'user',
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
        state.errorMessage = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.user = payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const { addProducts } = authSlice.actions;

export default authSlice.reducer;
