import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';
import axios from 'axios';

export const register = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}api/auth/register`, {
        firstName,
        lastName,
        email,
        password,
      });

      return data;
    } catch (error) {
      throw error.response.data.error_msg;
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}api/auth/login`, {
        email,
        password,
      });
      return data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

