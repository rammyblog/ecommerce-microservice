import React from 'react'
import cartLists from '../../cartLists'
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Stack,
  Button,
  Image,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux';

const CartItem = ({ id, title, price, amount, img }) => {
  return (
    <Stack paddingTop={4} paddingBottom={4} borderBottom='1px solid' borderColor='gray.200'>
      <Flex alignItems='center' w='100%' justifyContent='space-between'>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Image src={img} alt={title} w={65} h={65} />
          <Text w={350}>{title}</Text>
          
        </Box>
        <Text>{price}</Text>
      </Flex>
      <Flex alignItems='center' w='100%' justifyContent='space-between'>
        <Button bg='transparent' _hover={{ bg: 'purple.700', color: 'white' }}>
          <DeleteIcon />
          <Text ml={2}>REMOVE</Text>
        </Button>

        <Box display='flex' alignItems='center' color='#fff'>
          <Button bg='purple.500' _hover={{ bg: 'purple.700' }}><MinusIcon /></Button>
          <Text w={8} m={2} textAlign='center' color='#000'>{amount}</Text>
          <Button bg='purple.500' _hover={{ bg: 'purple.700'}}><AddIcon /></Button>
        </Box>
      </Flex>
    </Stack>

  )
}

export default CartItem;


























// import React from "react";

// const CartItem = ({ id, img, title, price, amount }) => {
//     return (
//       <>hELLO</>
//       // <article className='cart-item'>
//       //   <img src={img} alt={title} />
//       //   <div>
//       //     <h4>{title}</h4>
//       //     <h4 className='item-price'>${price}</h4>
//       //     <button
//       //       className='remove-btn'
//       //     >
//       //       remove
//       //     </button>
//       //   </div>
//       //   <div>
//       //     <button
//       //       className='amount-btn'
//       //     >
//       //       increase
//       //     </button>
//       //     <p className='amount'>{amount}</p>
//       //     <button
//       //       className='amount-btn'
//       //     >
//       //       decrease
//       //     </button>
//       //   </div>
//       // </article>
//     );
//   };
//   export default CartItem;