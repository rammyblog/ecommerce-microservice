import { AddIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { FALLBACK_IMAGE, NAIRA_SYMBOL } from '../../constants';
import { addToCart } from '../../store/cart/slice';

export default function SingleProduct({ product }) {
  const { image, name, sellingPrice, costPrice, category, id } = product;
  const dispatch = useDispatch();

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={image}
          alt={name}
          fallbackSrc={FALLBACK_IMAGE}
          boxSize={{ lg: '300px', md: '300px', sm: '100%' }}
          objectFit="cover"
          width={'100%'}
        />

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            <Flex justifyContent="space-between">
              <Link href={`/product/${id}`} style={{ cursor: 'pointer' }}>
                {name}
              </Link>
              <Badge colorScheme="green">
                <Link href="#">{category.name}</Link>
              </Badge>
            </Flex>
          </Box>
          <Box
            d="flex"
            mt="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex>
              <Text as="s" mr="2">
                {NAIRA_SYMBOL}{costPrice}
              </Text>
              <Text>{NAIRA_SYMBOL}{sellingPrice}</Text>
            </Flex>
            <Button
              colorScheme="gray.500"
              variant="outline"
              leftIcon={<AddIcon />}
              onClick={() => dispatch(addToCart({ product, qty: 1 }))}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
