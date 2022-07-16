import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Text,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FALLBACK_IMAGE, NAIRA_SYMBOL } from '../../constants';
import {
  addToCart
} from '../../store/cart/slice';

function SingleProductDetail({ product }) {
  const toast = useToast();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(0);
  return (
    <Box
      height={'80vh'}
      justifyContent="center"
      alignItems="center"
      display={{ lg: 'flex', md: 'flex', sm: 'block' }}
      mt={'50px'}
    >
      <Box width={'100%'}>
        <Image src={product.image} fallbackSrc={FALLBACK_IMAGE} />
      </Box>
      <Box width={'100%'} ml={{ lg: '5', md: '5', sm: '0' }}>
        <Heading py={3} as="h3" size="lg">
          {product.name}
        </Heading>
        <Text py={4}>{product.description}</Text>
        <Flex py={4}>
          <Text mr={3} fontWeight={'bold'}>
            Price:
          </Text>
          <Text as="s" mr="2">
            {NAIRA_SYMBOL}{product.costPrice}
          </Text>
          <Text> {NAIRA_SYMBOL}{product.sellingPrice}</Text>
        </Flex>
        <Select
          py={4}
          width={'50%'}
          placeholder="Select Quantity"
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (!value) {
              toast({
                title: 'Error',
                description: 'Select Quantity',
                status: 'error',
                duration: 6000,
                isClosable: true,
              });
              return;
            }
            setQty(value);
          }}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Select>

        <Button
          colorScheme="purple"
          variant="outline"
          onClick={() => {
            if (!qty) {
              toast({
                title: 'Error',
                description: 'Select Quantity',
                status: 'error',
                duration: 6000,
                isClosable: true,
              });
              return;
            }
            const modProduct = { ...product };
            dispatch(addToCart({ product: modProduct, qty }));
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default SingleProductDetail;
