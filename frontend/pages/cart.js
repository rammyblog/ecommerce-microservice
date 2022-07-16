import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartContainer from '../components/cart/CartContainer';
import Layout from '../components/Layout';
import getStore from '../store';
import { getLoggedInUser } from '../store/auth/actions';
import { restoreCart } from '../store/cart/slice';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreCart());
  });
  return (
    <Layout>
      <CartContainer />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = ctx.req.cookies?.ecommerceToken || null;
  const store = getStore();
  token && (await store.dispatch(getLoggedInUser(token)));
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

export default Cart;
