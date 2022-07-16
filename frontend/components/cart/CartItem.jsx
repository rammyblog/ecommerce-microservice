import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FALLBACK_IMAGE, NAIRA_SYMBOL } from '../../constants';
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from '../../store/cart/slice';

const CartItem = ({ id, name, sellingPrice, image, qty, item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(qty);
  return (
    <Stack
      paddingTop={4}
      paddingBottom={4}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex alignItems="center" w="100%" justifyContent="space-between">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            fallbackSrc={FALLBACK_IMAGE}
            src={image}
            alt={name}
            w={65}
            h={65}
          />
          <Text p={2}>{name}</Text>
        </Box>
        <Text padding={2}>
          {NAIRA_SYMBOL}
          {sellingPrice}
        </Text>
      </Flex>
      <Flex alignItems="center" w="100%" justifyContent="space-between">
        <Button bg="transparent" _hover={{ bg: 'red.300', color: 'white' }}>
          <DeleteIcon />
          <Text ml={2} onClick={() => dispatch(deleteFromCart(id))}>
            REMOVE
          </Text>
        </Button>

        <Box display="flex" alignItems="center" color="#fff">
          <Button
            size={'sm'}
            bg="purple.500"
            disabled={quantity < 1}
            _hover={{ bg: 'purple.700' }}
            onClick={() => {
              dispatch(removeFromCart(id));
              setQuantity((prev) => prev - 1);
            }}
          >
            <MinusIcon />
          </Button>
          <Text w={8} m={2} textAlign="center" color="#000">
            {quantity}
          </Text>
          <Button
            size={'sm'}
            bg="purple.500"
            _hover={{ bg: 'purple.700' }}
            onClick={() => {
              dispatch(addToCart({ product: item, qty: 1 }));
              setQuantity((prev) => prev + 1);
            }}
          >
            <AddIcon />
          </Button>
        </Box>
      </Flex>
    </Stack>
  );
};

export default CartItem;
