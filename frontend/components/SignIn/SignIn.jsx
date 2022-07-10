import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import CustomInput from '../customInput/CustomInput';
import Joi from 'joi';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  VStack,
  Button,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Box h="100vh" bg="white" color="gray.500">
      <Flex justify="space-around" h="93.5vh" align="center">
        <Box display={['none', 'none', 'flex']}>
          <Image src="login-img.svg" w={500} h={500} alt="login" />
        </Box>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <VStack spacing={5} align={['center', 'center', 'flex-start']}>
              <Heading color="purple.500" size="md">
                Welcome Back
              </Heading>
              <Form onSubmit={handleSubmit}>
                <FormControl
                  isInvalid={!!errors.email && touched.email}
                  marginBottom="1em"
                >
                  <CustomInput
                    label="Email Address"
                    name="email"
                    type="text"
                    placeholder="Enter Email address"
                    validate={(value) => {
                      let error;
                      if (value.length < 6) {
                        error = 'Enter a valid email address';
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={!!errors.password && touched.password}
                  marginBottom="1em"
                >
                  <CustomInput
                    label="Enter Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    // validate={(value) => {
                    //   let error;
                    //   if (value.length < 6) {
                    //     error =
                    //       "Password must contain at least 6 characters";
                    //   }

                    //   return error;
                    // }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" w="full">
                  Login
                </Button>
              </Form>
              <Box w="full" display="flex" justifyContent="center">
                Don't have an account?
                <Text color="purple" ml={2}>
                  <Link href="/register">Signup</Link>
                </Text>
              </Box>
            </VStack>
          )}
        </Formik>
      </Flex>
    </Box>
  );
};

export default SignIn;
