import React from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { submitEmail } from '../actions/EmailActions.js';
import FormInput from '../common/FormInput.js';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      placeholder={placeholder}
      helperText={errorText}
      modification='--small'
      error={!!errorText}
      form='contact-info__'
    />
  );
};

function ContactForm({ email: { emailSuccess, emailError }, submitEmail }) {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <Formik
      initialValues={{ email: '', name: '', subject: '', message: '' }}
      onSubmit={(values) => {
        submitEmail(values);
      }}
      validationSchema={ContactSchema}
    >
      {() => (
        <Form>
          <div
            className='contact-info__form--small contact-info__form'
            id='contact-form'
          >
            <MyTextField
              ariaLabel='name'
              name='name'
              type='text'
              required
              placeholder='Name'
            />
            <MyTextField
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              ariaLabel='Email'
              required
            />
            <MyTextField
              ariaLabel='Subject'
              name='subject'
              type='text'
              placeholder='Subject'
              required
            />

            <MyTextField
              id='message'
              name='message'
              placeholder='Message'
              type='text-box'
              ariaLabel='Message'
              required
            />
            <button
              type='submit'
              text='Submit'
              className='contact-info__button'
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactForm);
