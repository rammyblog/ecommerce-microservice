import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Text,
} from '@chakra-ui/react';
import { FALLBACK_IMAGE } from '../../constants';

function SingleProductDetail({ product }) {
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
            ₦{product.costPrice}
          </Text>
          <Text> ₦{product.sellingPrice}</Text>
        </Flex>
        <Select py={4} width={'50%'} placeholder="Select Quantity">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </Select>
        <Button colorScheme="purple" variant="outline">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default SingleProductDetail;
