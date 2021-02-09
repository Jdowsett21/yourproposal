import React from 'react';
import FormInput from '../common/FormInput.js';
import { useField } from 'formik';

function MyTextField({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      form='contact-info__'
    />
  );
}

export default MyTextField;
