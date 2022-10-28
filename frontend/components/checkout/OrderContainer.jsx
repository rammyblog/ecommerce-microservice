import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../cart/CartItem';
import OrderItem from './OrderItems';

const OrderContainer = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  return (
    <Box
      maxW="md"
      w={'md'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="base"
      p="6"
      rounded="md"
      bg="white"
    >
      <Text>Your order ({cart.length} items)</Text>
      <>
        {cart &&
          cart.length > 0 &&
          cart.map((item) => {
            return <OrderItem item={item} key={item.id} {...item} />;
          })}
      </>
    </Box>
  );
};

export default OrderContainer;
