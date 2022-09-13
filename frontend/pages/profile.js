import React from 'react'
import { Formik, Form } from 'formik';
import { Box, Heading, FormControl, FormErrorMessage, Button, SimpleGrid, GridItem } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import CustomInput from '../components/customInput/CustomInput';
import Sidebar from '../components/sidebar/Sidebar';

const Profile = () => {
  return (
    <>
    <Navbar />
    <Box display="flex">
            <Sidebar />
            <Box flex={10}>

                <Box
                    w="full"
                    p={5}
                    minH='calc(100vh - 80px)'
                    margin='0 auto'
                    borderWidth="1px"
                    // borderRadius="lg"
                    boxShadow="xl"
                    display="flex"
                    // justifyContent="center"
                    flexDirection="column"
                >
                    <Heading
                        borderBottomWidth="1px"
                        fontSize={18}
                        marginBottom={5}
                    >Account Details</Heading>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', newPassword: '' }}
                        onSubmit={(values) => {
                            dispatch(login(values));
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Box spacing={9} align={['center', 'center', 'flex-start']}>
                                <Form onSubmit={handleSubmit}>
                                    <SimpleGrid columns={2} spacing={10}>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.email && touched.email}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="First Name"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Enter First Name"
                                                    w="100%"
                                                    validate={(value) => {
                                                        let error;
                                                        if (value.length < 6) {
                                                            error = 'Enter First Name';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                            </FormControl>
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.email && touched.email}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="Last Name"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Enter Last Name"
                                                    w="100%"
                                                    validate={(value) => {
                                                        let error;
                                                        if (value.length < 6) {
                                                            error = 'Enter Last Name';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                            </FormControl>
                                        </GridItem>
                                    </SimpleGrid>
                                    <SimpleGrid columns={2} spacing={10}>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.email && touched.email}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="Email Address"
                                                    name="email"
                                                    type="text"
                                                    placeholder="Enter Email address"
                                                    w="100%"
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
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.password && touched.password}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="Enter Password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    w="100%"
                                                    validate={(value) => {
                                                        let error;
                                                        if (value.length < 6) {
                                                            error = 'Password must contain at least 6 characters';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                    </SimpleGrid>
                                    <SimpleGrid columns={2} spacing={10}>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.password && touched.password}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="Enter New Password"
                                                    name="newPassword"
                                                    type="password"
                                                    placeholder="Enter New Password"
                                                    w="100%"
                                                    validate={(value) => {
                                                        let error;
                                                        if (value.length < 6) {
                                                            error = 'Password must contain at least 6 characters';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                        <GridItem colSpan={1}>
                                            <FormControl
                                                isInvalid={!!errors.password && touched.password}
                                                marginBottom="1em"
                                            >
                                                <CustomInput
                                                    label="Confirm New Password"
                                                    name="newPassword"
                                                    type="password"
                                                    placeholder="Confirm New Password"
                                                    w="100%"
                                                    validate={(value) => {
                                                        let error;
                                                        if (value.length < 6) {
                                                            error = 'Password must contain at least 6 characters';
                                                        }
                                                        return error;
                                                    }}
                                                />
                                                <FormErrorMessage>{errors.password}</FormErrorMessage>
                                            </FormControl>
                                        </GridItem>
                                    </SimpleGrid>

                                    <Button
                                        type="submit"
                                        colorScheme="purple"
                                        w="full"
                                    // disabled={pending}
                                    >
                                        Save
                                    </Button>
                                </Form>
                            </Box>
                        )}
                    </Formik>
                </Box>
            </Box >
        </Box>
    </>

  )
}

export default Profile;