import axios from "axios";
import { Heading, useToast } from "@chakra-ui/react";
import Image from "next/image";
import registerimage from "../assets/register-image.svg";
import { useRouter } from "next/router";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import { register } from "../store/products/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const { pending, error, user } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [error]);
  return (
    <Container maxW="100vw"  textAlign="center">
      <Flex align="center" justify="space-around" h="87vh">
        <Box display={{ sm: "none", lg: "flex" }}>
          <Image
            src={registerimage}
            alt="register"
            fallbacksrc="https://via.placeholder.com/750.svg?text=Register+Image"
            height={650}
            width={650}
          />
        </Box>
        <Box width={{ sm: "full", lg: "30%" }}>
          <Box bg="white" p={6} rounded="md" width="100%">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              onSubmit={(initialValues) => {
                const post = initialValues;
                dispatch(register(post));
                router.route("/login")
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <Heading size="md" textColor="purple.800" cursor="pointer">
                      Create a new account
                    </Heading>
                    <FormControl
                      isInvalid={!!errors?.firstName && touched?.firstName}
                    >
                      <FormLabel htmlFor="firstName">First name</FormLabel>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="firstName"
                        variant="filled"
                        placeholder="Enter first name"
                        validate={(value) => {
                          let error;
                          if (value?.length < 3) {
                            error = "First name too short";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors?.lastName && touched?.lastName}
                    >
                      <FormLabel htmlFor="lastName">Last name</FormLabel>
                      <Field
                        as={Input}
                        id="lastName"
                        name="lastName"
                        autoComplete=" lastName"
                        type="text"
                        variant="filled"
                        placeholder="Enter your last name"
                        validate={(value) => {
                          let error;
                          if (value?.length < 3) {
                            error = "Last name too short";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors?.lastName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors?.email && touched?.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        variant="filled"
                        placeholder="Enter your email address"
                        validate={(value) => {
                          let error;
                          if (value?.length < 6) {
                            error = "Enter a valid email address";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors?.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors?.password && touched?.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        validate={(value) => {
                          let error;
                          if (value?.length < 6) {
                            error =
                              "Password must contain at least 6 characters";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors?.password}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" colorScheme="purple" width="full" >
                      { pending ? "Loading..." :"REGISTER"}
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
          <Text marginTop={3}>
            Already have an account?
            <Link
              href="/login"
              textColor="purple"
              marginLeft={2}
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}
