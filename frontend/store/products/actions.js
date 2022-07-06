import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch(
      'https://8ba7-102-89-39-122.ngrok.io/api/products/'
    );
    const { data } = await response.json();
    return data;
  }
);
