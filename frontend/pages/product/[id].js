import ErrorPage from 'next/error';
import getStore from '../../store';
import { getSingleProduct } from '../../store/products/actions';

import SingleProductDetail from '../../components/SingleProductDetail';

const ProductDetail = ({ initialState }) => {
  const { products } = initialState;
  const { error, product, pending } = products;
  if (pending) {
    return <h1>Loading</h1>;
  }
  if (error || !product) {
    return <ErrorPage statusCode={404} withDarkMode={false} />;
  }
  return (
    <>
      <SingleProductDetail product={product} />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const store = getStore();
  await store.dispatch(getSingleProduct(ctx.params.id));
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

export default ProductDetail;
