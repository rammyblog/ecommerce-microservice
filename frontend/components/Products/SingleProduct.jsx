import { AddIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function SingleProduct({ product }) {
  const { image, name, sellingPrice, costPrice, category } = product;

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          src={image}
          alt={name}
          fallbackSrc="https://bitsofco.de/content/images/2018/12/broken-1.png"
          boxSize="300px"
          objectFit="cover"
        />

        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            <Flex justifyContent="space-between">
              <Text>{name}</Text>
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
                ₦{costPrice}
              </Text>
              <Text>₦{sellingPrice}</Text>
            </Flex>
            <Button
              colorScheme="gray.500"
              variant="outline"
              leftIcon={<AddIcon />}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
