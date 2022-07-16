import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { BASE_URL, GENERIC_ERROR } from '../../constants';

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

      return data.data;
    } catch (error) {
      throw error.response.data.error_msg
        ? error.response.data.error_msg
        : GENERIC_ERROR;
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    try {
      const cookies = new Cookies();
      const { data } = await axios.post(`${BASE_URL}api/auth/login`, {
        email,
        password,
      });
      const token = data.data;
      cookies.set('ecommerceToken', token, { maxAge: 60 * 60 * 24 });
      return token;
    } catch (error) {
      console.log;
      throw error.response.data.error_msg
        ? error.response.data.error_msg
        : GENERIC_ERROR;
    }
  }
);

export const getLoggedInUser = createAsyncThunk('auth/user', async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}api/auth/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    console.log(error.response.data.error_msg);
    throw error.response.data.error_msg
      ? error.response.data.error_msg
      : GENERIC_ERROR;
  }
});
