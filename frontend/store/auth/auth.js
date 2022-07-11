import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './actions';

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
    registerUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      console.log(state, action.payload)
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
        state.user = payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const { registerUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
