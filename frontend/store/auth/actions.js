import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from '../../constants';

export const register = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password }) => {
    const response = await axios.post(`${BASE_URL}/api/auth/register`, {
      firstName,
      lastName,
      email,
      password,
    });

    const { data } = await response.json();
    return data;
  }
);
