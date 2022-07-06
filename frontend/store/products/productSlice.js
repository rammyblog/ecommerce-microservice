import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './actions';

const initialState = {
  products: [],
  pending: false,
  error: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
