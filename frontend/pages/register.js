import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import registerImage from '../assets/register-image.svg';
import CustomInput from '../components/customInput/CustomInput';
import { register } from '../store/auth/actions';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Link,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react';

export default function App() {
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [request, setRequest] = useState(false);
  const { pending, error, user, errorMessage } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (user) {
      router.push('/', undefined, { shallow: true });
    }
  });
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 6000,
        isClosable: true,
      });
    }
  }, [error, errorMessage]);

  useEffect(() => {
    if (user && request) {
      toast({
        title: 'Success',
        description: 'Registration successful',
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
      setRequest(false);
      router.push('/login');
    }
  }, [user]);
  return (
    <Box h="100vh" bg="white" color="gray.500" w="full">
      <Flex align="center" justify="space-between" height="80vh">
        <Box display={{ base: 'none', lg: 'flex' }} width={{ lg: '45%' }}>
          <Image src={registerImage} alt="register" height={650} width={650} />
        </Box>
        <Box width={{ base: '100%', lg: '40%' }}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              setRequest(true);
              dispatch(register(values));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={5} align={['center', 'center', 'flex-start']}>
                  <Heading size="lg" textColor="purple.500" cursor="pointer">
                    Create a New Account
                  </Heading>
                  <FormControl
                    isInvalid={!!errors?.firstName && touched?.firstName}
                    marginBottom="1em"
                  >
                    <CustomInput
                      label="First Name"
                      w="full"
                      name="firstName"
                      type="text"
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
                    marginBottom="1em"
                  >
                    <CustomInput
                      label="Last name"
                      w="full"
                      id="lastName"
                      name="lastName"
                      autoComplete=" lastName"
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
                  <FormControl
                    marginBottom="1em"
                    isInvalid={!!errors?.email && touched?.email}
                  >
                    <CustomInput
                      label="Email Address"
                      id="email"
                      name="email"
                      w="full"
                      type="email"
                      autoComplete="email"
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
                    marginBottom="1em"
                    isInvalid={!!errors?.password && touched?.password}
                  >
                    <CustomInput
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      w="full"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      validate={(value) => {
                        let error;
                        if (value?.length < 6) {
                          error = 'Password must contain at least 6 characters';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors?.password}</FormErrorMessage>
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="purple"
                    disabled={pending}
                    w="full"
                  >
                    {pending ? 'Loading...' : 'REGISTER'}
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>

          <Text marginTop={3}>
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
