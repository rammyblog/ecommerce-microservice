import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { memo } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoLogOutOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';

function CartIcon() {
  const { cart, count } = useSelector((state) => state.cart);

  return (
    <NextLink href="/cart">
      <Avatar
        icon={<Icon as={AiOutlineShoppingCart} />}
        bg="white"
        style={{ cursor: 'pointer', zIndex: 1 }}
        mr="2"
      >
        <AvatarBadge
          boxSize="1.5rem"
          bg="green.500"
          fontSize="0.8rem"
          color="white"
        >
          {count > 0 ? count : 0}
        </AvatarBadge>
      </Avatar>
    </NextLink>
  );
}

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);

  return (
    <Flex p="4">
      <Box>
        <NextLink href="/">
          <Heading size="lg" textColor="purple.500" cursor="pointer">
            ProductO!
          </Heading>
        </NextLink>
      </Box>

      <Spacer />

      <>
        <CartIcon />

        {!user ? (
          <ButtonGroup gap="4">
            <NextLink href="/register">
              <Button colorScheme="purple">Sign Up</Button>
            </NextLink>
            <NextLink href="/login">
              <Button colorScheme="purple">Log in</Button>
            </NextLink>
          </ButtonGroup>
        ) : (
          <Flex gap="3" alignItems={'center'}>
            <NextLink href="/profile">
              <Icon as={CgProfile} w={6} h={6} />
            </NextLink>
            <IconButton
              aria-label="Log out"
              icon={<IoLogOutOutline w={6} h={6} />}
              // onClick={() => dispatch(authLogout())}
            />
          </Flex>
        )}
      </>
    </Flex>
  );
}

export default memo(Navbar);
