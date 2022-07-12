import { createSlice } from '@reduxjs/toolkit';
import { register, login, getLoggedInUser } from './actions';

const initialState = {
  user: null,
  pending: false,
  error: false,
  errorMessage: null,
  success: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      state.token = action.payload;
    },
    getLoggedInUserAction: (state, action) => {
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
      })
      .addCase(login.pending, (state) => {
        state.pending = true;
        state.error = false;
        state.errorMessage = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.token = payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.errorMessage = action.error.message;
      })
      .addCase(getLoggedInUser.pending, (state, action) => {
        state.pending = true;
        state.error = false;
        state.errorMessage = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.user = payload;
      })
      .addCase(getLoggedInUser.rejected, (state, { payload }) => {
        state.pending = false;
        state.error = true;
        state.errorMessage = payload;
      });
  },
});

export const { registerUser, loginUser, getLoggedInUserAction } =
  authSlice.actions;

export default authSlice.reducer;
