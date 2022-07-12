import { SimpleGrid } from '@chakra-ui/react';
import SingleProduct from '../components/Products/SingleProduct';
import getStore from '../store';
import { getLoggedInUser } from '../store/auth/actions';
import { getLoggedInUserAction } from '../store/auth/authSlice';
import { getProducts } from '../store/products/actions';

export default function Home({ initialState }) {
  const { products } = initialState;

  return (
    <>
      <SimpleGrid minChildWidth="250px" spacing="40px">
        {products.products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export async function getServerSideProps() {
  const store = getStore();

  await store.dispatch(getProducts());
  // await store.dispatch(getLoggedInUser());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}
