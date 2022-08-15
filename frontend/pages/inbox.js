import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import orderImage from "../assets/order.svg"
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar/Sidebar';

const Inbox = () => {
  return (
    <>
      <Navbar />
    <Flex >

      <Sidebar />
      <Box flex={10} >
        <Box
          w="full"
          minH='calc(100vh - 80px)'
          // minH="100vh"
          margin='0 auto'
          borderWidth="1px"
          boxShadow="xl"
        >
          <Heading
            p={5}
            borderBottomWidth="1px"
            fontSize={20}
            marginBottom={5}
          >Inbox</Heading>
          <Box margin="0 auto" maxW={365} textAlign="center" p="50px 10px">
            <Image src={orderImage} alt='order-image' />
            <Heading fontSize={16}>You don't have any messages</Heading>
            <Text>Here you will be able to see all the messages that we send you. Stay tuned</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
    </>


  )
}

export default Inbox