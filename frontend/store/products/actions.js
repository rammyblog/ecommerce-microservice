import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch(`${BASE_URL}api/products/`);
    const { data } = await response.json();
    return data;
  }
);

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}api/products/${id}/`);
    return data ? data.data : null;
  }
);
