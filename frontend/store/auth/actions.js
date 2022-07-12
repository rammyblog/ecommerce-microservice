import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';
import axios from 'axios';
import checkJWT from '../../utils/jwtDecoder';
import { localStorageTest } from '../../utils/localStorage';

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
      const { access_token } = data;
      localStorageTest() && localStorage.setItem('ecommerceMS', access_token);
      return access_token;
    } catch (error) {
      throw error.response.data.error_msg;
    }
  }
);

export const getLoggedInUser = createAsyncThunk('auth/user', async () => {
  try {
    if (localStorageTest()) {
      const { id } = checkJWT();
      const { data } = await axios.get(`${BASE_URL}api/users/${id}`);
      return data.data;
    }
  } catch (error) {
    throw error.response.data.error_msg;
  }
});
