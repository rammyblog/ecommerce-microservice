import { configureStore, combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { createWrapper } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  productReducer,
});

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
