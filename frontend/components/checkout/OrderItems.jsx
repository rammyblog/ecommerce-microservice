import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FALLBACK_IMAGE, NAIRA_SYMBOL } from '../../constants';

const OrderItem = ({ id, name, sellingPrice, image, qty, item }) => {
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
          <Text fontWeight={'bold'} p={2}>
            {name}
          </Text>
        </Box>
      </Flex>
      <Text paddingTop={2}>
        <span style={{ color: 'orange', marginRight: '10px' }}>Price:</span>
        {NAIRA_SYMBOL}
        {sellingPrice}
      </Text>
      <Text mt={1} color="#000">
        <span style={{ color: 'gray', marginRight: '10px' }}> Qty:</span>
        {qty}
      </Text>
    </Stack>
  );
};

export default OrderItem;
