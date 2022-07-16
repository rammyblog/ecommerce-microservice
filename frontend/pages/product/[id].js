import ErrorPage from 'next/error';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SingleProductDetail from '../../components/SingleProductDetail/Index';
import getStore from '../../store';
import { getLoggedInUser } from '../../store/auth/actions';
import { restoreCart } from '../../store/cart/slice';
import { getSingleProduct } from '../../store/products/actions';

const ProductDetail = ({ initialState }) => {
  const { error, pending, product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreCart());
  }, []);

  if (pending) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <ErrorPage statusCode={404} withDarkMode={false} />;
  }
  return (
    <Layout>{product && <SingleProductDetail product={product} />}</Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = ctx.req.cookies?.ecommerceToken || null;
  const store = getStore();
  token && (await store.dispatch(getLoggedInUser(token)));
  await store.dispatch(getSingleProduct(ctx.params.id));
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

export default ProductDetail;
