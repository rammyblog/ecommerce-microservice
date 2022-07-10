import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://8ba7-102-89-39-122.ngrok.io";
export const register = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, password }) => {
    const response = await axios.post(API_URL + "/api/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });

    const { data } = await response.json();
    return data;
  }
);
