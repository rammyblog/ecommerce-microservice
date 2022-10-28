import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL, GENERIC_ERROR } from '../../constants';
import { useRouter } from 'next/router';

function PaymentForm({ token }) {
  const { newOrder } = useSelector((state) => state.order);
  const router = useRouter();

  const [paymentUrl, setPaymentUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (paymentUrl) {
      router.push(paymentUrl);
    }
  }, [paymentUrl]);

  const getPaymentUrl = async () => {
    setLoading(true);
    const payload = {
      orderId: String(newOrder.id),
      amount: String(newOrder.amount),
    };

    try {
      const { data } = await axios.post(
        `${BASE_URL}api/initialize-transaction/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPaymentUrl(data.data.data.authorization_url);
      setLoading(false);
      return data.data;
    } catch (error) {
      setLoading(false);

      console.log({ error });
      throw error.response.data.error_msg
        ? error.response.data.error_msg
        : GENERIC_ERROR;
    }
  };

  return (
    <Box>
      <Text>How do you want to pay for your order?</Text>
      <Flex alignItems="center">
        <Image src="https://static.jumia.com.ng/cms/JumiaPay/secured-payfac_cards.png" />
        <Text>Pay with cards</Text>
      </Flex>
      <Button
        disabled={loading}
        colorScheme="purple"
        onClick={() => getPaymentUrl()}
      >
        Pay Now
      </Button>
    </Box>
  );
}

export default PaymentForm;
