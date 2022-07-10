// When I have time, I am going to rip off redux, For some things, seems like we don't need it

import { ChakraProvider, Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import getStore from '../store';

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Container maxW="container.xl" minHeight="80vh">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
