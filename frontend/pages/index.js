import { SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import SingleProduct from '../components/Products/SingleProduct';
import getStore from '../store';
import { getLoggedInUser } from '../store/auth/actions';
import { restoreCart } from '../store/cart/slice';
import { getProducts } from '../store/products/actions';

export default function Home({ initialState, token }) {
  const { products } = initialState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreCart());
  }, []);

  return (
    <Layout>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {products.products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.cookies?.ecommerceToken || null;
  const store = getStore();

  token && (await store.dispatch(getLoggedInUser(token)));
  await store.dispatch(getProducts());
  return {
    props: {
      initialState: store.getState(),
      token,
    },
  };
};
