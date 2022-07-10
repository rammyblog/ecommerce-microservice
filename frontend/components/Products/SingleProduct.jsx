// import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  // Text
} from "@chakra-ui/react";
import Link from "next/link";
import { FALLBACK_IMAGE } from "../../constants";

export default function SingleProduct({ product }) {
  const { image, name, sellingPrice, costPrice, category, id } = product;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={image}
        alt={name}
        fallbackSrc={FALLBACK_IMAGE}
        boxSize={{ lg: "300px", md: "300px", sm: "100%" }}
        objectFit="cover"
        width={"100%"}
      />

      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          <Flex justifyContent="space-between">
            <Link href={`/product/${id}`} style={{ cursor: "pointer" }}>
              {name}
            </Link>
            <Badge colorScheme="green">
              <Link href="#">{category.name}</Link>
            </Badge>
          </Flex>
        </Box>
        <Button
          d="flex"
          mt="2"
          alignItems="center"
          justifyContent="space-between"
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
}
