import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './products/productSlice';

const combinedReducer = combineReducers({
  products,
});

export let store = null;

export default function getStore(incomingPreloadState) {
  store = configureStore({
    reducer: combinedReducer,
    preloadedState: incomingPreloadState,
    devTools: true,
  });
  return store;
}
