import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getSingleProduct } from './actions';

const initialState = {
  products: [],
  pending: false,
  error: false,
  product: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    addSingleProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.products = payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getSingleProduct.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.product = payload;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { addProducts, addSingleProduct } = productSlice.actions;

export default productSlice.reducer;
