import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function PaymentForm() {
  return (
    <Box>
      <Text>How do you want to pay for your order?</Text>
      <Flex alignItems="center">
        <Image src="https://static.jumia.com.ng/cms/JumiaPay/secured-payfac_cards.png" />
        <Text>Pay with cards</Text>
      </Flex>
      <Button colorScheme="purple">Pay Now</Button>
    </Box>
  );
}

export default PaymentForm;
