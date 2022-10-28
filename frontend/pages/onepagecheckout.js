import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CheckoutForm from '../components/checkout/checkoutForm';
import OnePageCheckoutComponent from '../components/checkout/OnePageCheckout';
import OrderContainer from '../components/checkout/OrderContainer';
import Layout from '../components/Layout';
import getStore from '../store';
import { getLoggedInUser } from '../store/auth/actions';
import { restoreCart } from '../store/cart/slice';

export default function OnePageCheckout({ initialState, token }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreCart());
  });
  return (
    <Layout>
      <Flex justifyContent={'space-between'}>
        <Box>
          <OnePageCheckoutComponent token={token} />
        </Box>
        <OrderContainer />
      </Flex>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.cookies?.ecommerceToken || null;
  // console.log(ctx.req.cookies?.ecommerceToken);
  const store = getStore();
  token && (await store.dispatch(getLoggedInUser(token)));
  //   await store.dispatch(getProducts());
  return {
    props: {
      initialState: store.getState(),
      token,
    },
  };
};
