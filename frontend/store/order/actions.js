import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constants';

export const createOrderAction = createAsyncThunk(
  'order/createOrder',
  async (values) => {
    const { values: order, token } = values;
    try {
      const { data } = await axios.post(`${BASE_URL}api/orders/`, order, {
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
  }
);

export const getOrderAction = createAsyncThunk('order/getOrder', async () => {
  const response = await axios.get(`${BASE_URL}api/order/`);
  const { data } = await response.json();
  return data;
});
