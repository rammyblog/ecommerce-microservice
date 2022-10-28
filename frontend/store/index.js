import { configureStore, combineReducers } from '@reduxjs/toolkit';
import products from './products/slice';
import user from './auth/slice';
import cart from './cart/slice';
import order from './order/slice';
const combinedReducer = combineReducers({
  products,
  user,
  cart,
  order,
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
