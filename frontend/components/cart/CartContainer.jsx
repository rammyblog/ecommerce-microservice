import React from 'react';
import { Box, Heading, Flex, Text, Button, Center } from '@chakra-ui/react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { NAIRA_SYMBOL } from '../../constants';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

const CartContainer = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <>
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent={['center', 'center', 'space-between']}
        w="100%"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="xl"
          w={['full', 'full', '70%']}
        >
          <Heading
            fontSize="xl"
            p="4"
            borderBottom="1px solid"
            borderColor="gray.200"
          >
            Shopping Cart
          </Heading>
          <Box padding={5}>
            {cart && cart.length > 0 ? (
              cart.map((item) => {
                return <CartItem item={item} key={item.id} {...item} />;
              })
            ) : (
              <>
                <Text>No Product in cart</Text>
                <Center>
                  <Text mr={1}> Go back</Text>{' '}
                  <Link href={'/'}>
                    <Text cursor={'pointer'} color="purple.500">
                      Home
                    </Text>
                  </Link>
                </Center>
              </>
            )}
          </Box>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="xl"
          padding="5"
          w={['100%', '100%', '25%']}
          h="fit-content"
          // display={['none', 'none', 'block']}
        >
          <Heading
            paddingTop={2}
            paddingBottom={2}
            borderBottom="1px solid"
            borderColor="gray.200"
            fontSize="16px"
          >
            Cart Summary
          </Heading>
          <Box
            paddingTop={4}
            paddingBottom={4}
            display="flex"
            justifyContent="space-between"
          >
            <Text>Total</Text>
            {NAIRA_SYMBOL} {totalAmount}
          </Box>
          <Button
            w="full"
            bg="purple.500"
            color="white"
            _hover={{ bg: 'purple.700' }}
            display="block"
            disabled={!user}
            onClick={() => router.push('/onepagecheckout')}
          >
            CHECKOUT
          </Button>
        </Box>
      </Flex>
      {/* <Button
        w="full"
        pos="sticky"
        bottom="0"
        zIndex={2}
        bg="purple.500"
        color="white"
        _hover={{ bg: 'purple.700' }}
        display={['block', 'block', 'none']}
        disabled={!user}
      >
        CHECKOUT
      </Button> */}
    </>
  );
};

export default CartContainer;
