import { createSlice } from '@reduxjs/toolkit';
import { createOrderAction, getProducts, getSingleProduct } from './actions';

const initialState = {
  orders: [],
  pending: false,
  error: false,
  message: null,
  newOrder: null,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.orders = [...state.orders, action.payload];
      state.message = 'Order created Success';
      state.newOrder = action.payload;
    },
    // getOrders: (state, action) => {
    //   state.orders = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAction.pending, (state) => {
        state.pending = true;
        state.error = false;
      })
      .addCase(createOrderAction.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.orders = [...state.orders, payload];
        state.message = 'Order created Success';
        state.newOrder = payload;
      })
      .addCase(createOrderAction.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
    //   .addCase(getSingleProduct.pending, (state) => {
    //     state.pending = true;
    //     state.error = false;
    //   })
    //   .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
    //     state.pending = false;
    //     state.product = payload;
    //   })
    //   .addCase(getSingleProduct.rejected, (state) => {
    //     state.pending = false;
    //     state.error = true;
    //   });
  },
});

export const { createOrder } = orderSlice.actions;

export default orderSlice.reducer;
