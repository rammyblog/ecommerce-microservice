// When I have time, I am going to rip off redux, For some things, seems like we don't need it

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import getStore from '../store';

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
