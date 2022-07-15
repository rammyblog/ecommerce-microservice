import getStore from '../store';
import { getProducts } from '../store/products/actions';

export default (GetServerSidePropsFunction) => async (ctx) => {
  // 1. Check if there is a token in cookies. Let's assume that your JWT is stored in 'jwt'
  // 2. Perform an authorized HTTP GET request to the private API to check if the user is genuine.
  // const { data } = await authenticate(jwt); // your code here...

  // 3. If there is no user, or the user is not authenticated, then redirect to homepage.
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  // 4. Return your usual 'GetServerSideProps' function.
  return await GetServerSidePropsFunction(ctx);
};
