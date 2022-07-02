import registerimage from "../assets/register-image.svg";
import Image from "next/image";
import NextLink from "next/link";
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
  Container,
  Text,
  Link,
} from "@chakra-ui/react";

export default function App() {
  return (
    <Box bg="gray.100" align="center" p={30} w="100vw">
      <Flex justify="space-around" h="93.5vh" align="center">
        <Box display={{ sm: "none", lg: "flex" }}>
          <Image
            src={registerimage}
            // src="https://payfoodo.herokuapp.com/static/media/register.fed4c349.svg"
            alt="register"
            fallbackSrc="https://via.placeholder.com/750.svg?text=Register+Image"
            height={650}
            width={650}
          />
        </Box>
        <Box width={{ sm: "full", lg: "30%" }}>
          <Box bg="white" p={6} rounded="md" width="100%">
            <Formik
              initialValues={{
                fullname: "",
                username: "",
                email: "",
                password: "",
                Address: "",
              }}
              onSubmit={(values) => {
                // alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="fullname">Full name</FormLabel>
                      <Field
                        as={Input}
                        id="fullname"
                        name="fullname"
                        type="text"
                        variant="filled"
                        placeholder="Enter first name then last name"
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.username && touched.username}
                    >
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Field
                        as={Input}
                        id="username"
                        name="username"
                        type="text"
                        variant="filled"
                        placeholder="Enter your username"
                        validate={(value) => {
                          let error;
                          if (value.length < 3) {
                            error = "Username too short";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.username}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                        placeholder="Enter your email address"
                        validate={(value) => {
                          let error;
                          if (
                            value.indexOf("@") === -1 &&
                            value.indexOf(".com") === -1
                          ) {
                            error = "Enter a valid email address";
                          }
                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        placeholder="Enter password of 6 characters"
                        validate={(value) => {
                          let error;
                          var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

                          if (value.length < 5 && !value.match(passw)) {
                            error =
                              "Password must contain at least 6 characters, 1 uppercase, 1 lowercase and 1 number";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <Field
                        as={Input}
                        id="address"
                        name="address"
                        type="text"
                        variant="filled"
                        placeholder="Enter your home address"
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="purple" width="full">
                      REGISTER
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
          <Text marginTop={5}>
            Already have an account?
            <Link
              href="/login"
              passHref
              textColor="purple"
              marginLeft={2}
              _hover={{ textDecoration: "underline" }}
            >
            Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
