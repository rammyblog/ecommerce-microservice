import React from 'react'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react'
import CartItem from './CartItem'
import cartLists from '../../cartLists'

const CartContainer = (cart) => {
  return (
    <>
      <Flex justifyContent={['center', 'center', 'space-between']} w='100%' >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          boxShadow='2xl'
          w={['full', 'full', '70%']}
        >
          <Heading
            fontSize='xl'
            p='4'
            borderBottom='1px solid'
            borderColor='gray.200'
          >Shopping Carts</Heading>
          <Box
            padding={5}
          >
            {cartLists.map((item) => {
              return <CartItem key={item.id} {...item} />
            })}
          </Box>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          boxShadow='2xl'
          padding='5'
          w="25%"
          h="fit-content"
          display={['none', 'none', 'block']}
        >
          <Heading
            paddingTop={2} paddingBottom={2}
            borderBottom='1px solid' borderColor='gray.200'
            fontSize='16px'
          >Cart Summary</Heading>
          <Box paddingTop={4} paddingBottom={4} display='flex' justifyContent='space-between' >
            <Text>Total</Text>
          </Box>
          <Button w='full' bg='purple.500' color='white' _hover={{ bg: 'purple.700' }} display='block'>CHECKOUT</Button>
        </Box>
      </Flex>
      <Button w='full' pos='sticky' bottom='0' zIndex={2} bg='purple.500' color='white' _hover={{ bg: 'purple.700' }} display={['block', 'block', 'none']}>CHECKOUT</Button>
    </>
  )
}

export default CartContainer;