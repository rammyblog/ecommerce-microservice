import React, { useState } from 'react'
import Image from 'next/image';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import Link from 'next/link';
import orderImage from "../assets/order.svg"
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar';



const Order = () => {

    const [page, setPage] = useState("open");

    const openHandler = () => {
        if (page === "open") {
            setPage("open")
        }
        setPage("close")
    }

    const closeHandler = () => {
        if (page === "close") {
            setPage("close")
        }
        setPage("open")
    }

    return (
        <>
        <Navbar />
          <Flex>
            <Sidebar />
            <Box flex={10}>

                <Box
                    w="full"
                    minH='calc(100vh - 80px)'
                    margin='0 auto'
                    borderWidth="1px"
                    boxShadow="xl"
                    display="flex"
                    flexDirection="column"
                >
                    <Heading
                        p={5}
                        borderBottomWidth="1px"
                        fontSize={20}
                        marginBottom={5}
                    >Orders</Heading>
                    <Flex textTransform="uppercase" justifyItems="center" >
                        <Link href="#"><Text p={4} fontSize={18} fontWeight="bold" _hover={{ borderBottom: "2px solid", borderColor: "purple", cursor: "pointer", color: "purple" }}
                            onClick={closeHandler}
                        > open orders</Text></Link>

                        <Link href="#"><Text p={4} fontSize={18} fontWeight="bold" _hover={{ borderBottom: "2px solid", borderColor: "purple", cursor: "pointer", color: "purple" }}
                            onClick={openHandler}
                        >closed orders</Text></Link>
                    </Flex>
                    {page === "open" &&
                    <Box margin="0 auto" maxW={365} textAlign="center" p="50px 10px">
                        <Image src={orderImage} alt='order-image' />
                        <Heading fontSize={16}>You have placed no orders yet!</Heading>
                        <Text>All your orders will be saved here for you to access their state anytime.</Text>
                        <Button p={4} textTransform="uppercase" colorScheme="purple" mt="20px">continue shopping</Button>
                    </Box>
                }
                {page === "close" &&
                    <Box margin="0 auto" maxW={365} textAlign="center" p="50px 10px">
                        <Image src={orderImage} alt='order-image' />
                        <Heading fontSize={16}>No Closed Orders to Display</Heading>
                        <Text>All your Closed Orders will be saved here.</Text>
                        <Button p={4} textTransform="uppercase" colorScheme="purple" mt="20px">start shopping</Button>
                    </Box>
                }
                </Box>



            </Box >
        </Flex>

        </>
      
    )
}

export default Order;