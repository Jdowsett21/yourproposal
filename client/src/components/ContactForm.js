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
    <div className='contact'>
      <div className=''></div>
      <Formik
        initialValues={{ email: '', name: '', subject: '', message: '' }}
        onSubmit={(values) => {
          submitEmail(values);
        }}
        validationSchema={ContactSchema}
      >
        {() => (
          <Form>
            <div className='contact-info__form' id='contact-form'>
              <h2 className='contact-info__form-header'>Contact Us Today</h2>
              <h2 className='contact-info__form-header--secondary'>
                We would be delighted to hear your idea and discuss how we can
                help you!
              </h2>

              <MyTextField
                ariaLabel='name'
                name='name'
                type='text'
                required
                placeholder='Name'
              />
              <MyTextField
                placeholder='Email'
                id='email'
                name='email'
                type='email'
                ariaLabel='Email'
                required
              />
              <MyTextField
                placeholder='Subject'
                ariaLabel='Subject'
                name='subject'
                type='text'
                required
              />

              <MyTextField
                placeholder='Message'
                id='message'
                name='message'
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactForm);
