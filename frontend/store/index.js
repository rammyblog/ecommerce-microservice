import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./products/productSlice";
import user from "./auth/auth";

const combinedReducer = combineReducers({
  products,
  user,
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
