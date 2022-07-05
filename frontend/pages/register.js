import registerimage from '../assets/register-image.svg';
import Image from 'next/image';
import { Formik, Field } from 'formik';
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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

//...
export default function App() {
  const router = useRouter();

  return (
    <Box bg="gray.100" align="center" p={30} w="100vw">
      <Flex justify="space-around" h="93.5vh" align="center">
        <Box display={{ sm: 'none', lg: 'flex' }}>
          <Image
            src={registerimage}
            alt="register"
            fallbacksrc="https://via.placeholder.com/750.svg?text=Register+Image"
            height={650}
            width={650}
          />
        </Box>
        <Box width={{ sm: 'full', lg: '30%' }}>
          <Box bg="white" p={6} rounded="md" width="100%">
            <Formik
              initialValues={{
                fullName: '',
                lastName: '',
                email: '',
                password: '',
              }}
              onSubmit={() => {
                router.push('/');
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl
                      isInvalid={!!errors?.firstname && touched?.firstname}
                    >
                      <FormLabel htmlFor="firstName">First name</FormLabel>
                      <Field
                        as={Input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        autocomplete="firstName"
                        variant="filled"
                        placeholder="Enter first name"
                        validate={(value) => {
                          let error;
                          if (value?.length < 3) {
                            error = 'First name too short';
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
                        autocomplete=" lastName"
                        type="text"
                        variant="filled"
                        placeholder="Enter your last name"
                        validate={(value) => {
                          let error;
                          if (value?.length < 3) {
                            error = 'Last name too short';
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
                        autocomplete="email"
                        variant="filled"
                        placeholder="Enter your email address"
                        validate={(value) => {
                          let error;
                          if (value?.length < 6) {
                            error = 'Enter a valid email address';
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
                        autocomplete="current-password"
                        placeholder="Enter your password"
                        validate={(value) => {
                          let error;
                          if (value?.length < 6) {
                            error =
                              'Password must contain at least 6 characters';
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors?.password}</FormErrorMessage>
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
              textColor="purple"
              marginLeft={2}
              _hover={{ textDecoration: 'underline' }}
            >
              Login
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
