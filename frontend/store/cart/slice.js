import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  pending: false,
  error: false,
  count: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { cart, count, totalAmount } = addToExistingObjInCart(
        state,
        payload
      );
      state.cart = cart;
      state.count = count;
      state.totalAmount = totalAmount;
    },

    removeFromCart: (state, { payload }) => {
      return {
        ...state,
        ...removeItemFromCart(state, payload),
      };
    },
    restoreCart: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
    clearCart: () => {
      localStorage.removeItem('ecommerceMS-cart');
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});

function addToExistingObjInCart(prevState, payload) {
  let newCartState = { ...prevState };
  const { product, qty } = payload;
  let existingProduct = newCartState.cart.find((obj) => obj.id === product.id);
  if (existingProduct) {
    existingProduct.qty = qty;
    newCartState.totalAmount = calculateTotal(newCartState.cart);
    newCartState.count = countItemsInCart(newCartState.cart);
    localStorage.setItem('ecommerceMS-cart', JSON.stringify(newCartState));
    const { cart, count, totalAmount } = newCartState;
    return { cart, count, totalAmount };
  } else {
    product.qty = qty;
    let updatedCart = { ...prevState };
    updatedCart.cart = [...updatedCart.cart, product];
    updatedCart.totalAmount = calculateTotal(updatedCart.cart);
    updatedCart.count = countItemsInCart(updatedCart.cart);
    localStorage.setItem('ecommerceMS-cart', JSON.stringify(updatedCart));
    const { cart, count, totalAmount } = updatedCart;
    return { cart, count, totalAmount };
  }
}

function removeItemFromCart(prevState, payload) {
  const newCartState = { ...prevState };
  newCartState.cart = newCartState.cart.filter((obj) => obj.id !== payload);
  newCartState.priceBeforeCoupon = calculateTotal(newCartState.cart);
  newCartState.totalAmount = calculateTotal(newCartState.cart);
  newCartState.count = countItemsInCart(newCartState.cart);
  localStorage.setItem('ecommerceMS-cart', JSON.stringify(newCartState));
  const { cart, count, totalAmount } = newCartState;
  return { cart, count, totalAmount };
}

function calculateTotal(cart) {
  let total = 0;
  total = cart.reduce((sum, i) => {
    return sum + i.price * parseInt(i.qty, 10);
  }, 0);
  return +total.toFixed(2);
}

function countItemsInCart(cart) {
  return cart.reduce((sum, i) => {
    return sum + i.qty;
  }, 0);
}

export const { addToCart, removeFromCart, restoreCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
