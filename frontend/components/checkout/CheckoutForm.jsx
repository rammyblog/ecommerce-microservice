import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createOrderAction } from '../../store/order/actions';
import transformCartItems from '../../utils/transformCartItems';
import CustomInput from '../customInput/CustomInput';
import * as Yup from 'yup';
import { useEffect } from 'react';

const orderSchema = Yup.object().shape({
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const CheckoutForm = ({ token, setShowCheckOutForm, setShowPaymentForm }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { pending, error, orders, message } = useSelector(
    (state) => state.order
  );
  useEffect(() => {
    if (message) {
      toast({
        title: 'Success',
        description: 'Order Created Success',
        status: 'success',
        duration: 6000,
        isClosable: true,
      });
      setShowCheckOutForm();
      setShowPaymentForm();
    }
  }, [message]);

  const { cart } = useSelector((state) => state.cart);

  return (
    <Box bg="white" color="gray.500">
      <Formik
        initialValues={{ phoneNumber: '', address: '' }}
        onSubmit={(values) => {
          values.cart = transformCartItems(cart);
          // console.log('init', token);
          dispatch(createOrderAction({ values, token }));
        }}
        validationSchema={orderSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <>
            <Heading color="purple.500">Fill checkout details</Heading>
            <Form onSubmit={handleSubmit}>
              <FormControl
                isInvalid={!!errors.address && touched.address}
                marginBottom="1em"
              >
                <CustomInput
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter delivery address"
                  required
                />
                <FormErrorMessage>{errors.address}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors.phoneNumber && touched.phoneNumber}
                marginBottom="1em"
              >
                <CustomInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter Phone Number"
                />
                <FormErrorMessage>{errors.address}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" disabled={pending}>
                {pending ? 'Loading...' : 'Create Order '}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default CheckoutForm;
