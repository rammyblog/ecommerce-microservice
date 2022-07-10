import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

function Navbar() {
  return (
    <Flex>
      <Box p="2">
        <NextLink href="/">
          <Heading size="lg" textColor="purple.500" cursor="pointer">
            Chakra App
          </Heading>
        </NextLink>
      </Box>

      <Spacer />

      <ButtonGroup gap="4">
        <NextLink href="/register">
          <Button colorScheme="purple">Sign Up</Button>
        </NextLink>
        <NextLink href="/login">
          <Button colorScheme="purple">Log in</Button>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
