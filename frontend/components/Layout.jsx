import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" minHeight="80vh">
        {children}
      </Container>
    </>
  );
}

export default Layout;
