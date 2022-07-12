import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import React, { memo } from 'react';
import NextLink from 'next/link';
import { useSelector } from 'react-redux';

function Navbar() {
  const { user } = useSelector((state) => state.user);
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
      {!user ? (
        <ButtonGroup gap="4">
          <NextLink href="/register">
            <Button colorScheme="purple">Sign Up</Button>
          </NextLink>
          <NextLink href="/login">
            <Button colorScheme="purple">Log in</Button>
          </NextLink>
        </ButtonGroup>
      ) : null}
    </Flex>
  );
}

export default memo(Navbar);
