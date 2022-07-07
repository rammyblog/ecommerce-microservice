import { ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Navbar from "../components/Navbar";
import getStore from "../store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <ToastContainer />
      <ChakraProvider>
        <Navbar />
        <Container maxW="100vw" >
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
