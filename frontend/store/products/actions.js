import { createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = "https://8ba7-102-89-39-122.ngrok.io";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch(API_URL + "/api/products/");
    const { data } = await response.json();
    return data;
  }
);


