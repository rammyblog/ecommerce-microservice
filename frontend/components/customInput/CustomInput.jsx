import { useField, Field } from 'formik';
import { FormLabel, Input } from '@chakra-ui/react';

const CustomInput = ({ errors, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Field
        as={Input}
        w={[300, 300, 'auto', 400]}
        border="1px solid"
        borderColor="gray.500"
        {...field}
        {...props}
        variant="filled"
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
    </>
  );
};

export default CustomInput;
