import { ChakraProvider } from '@chakra-ui/react';
import { wrapper } from '../store';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default wrapper.withRedux(App);
