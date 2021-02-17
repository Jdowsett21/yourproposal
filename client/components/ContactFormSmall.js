import React, { useEffect } from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { submitEmail } from '../actions/EmailActions.js';
import FormInput from '../common/FormInput.js';
import { toast, ToastContainer } from 'react-toastify';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      placeholder={placeholder}
      helpertext={errorText}
      error={errorText ? 'true' : 'false'}
      form='contact-info__'
    />
  );
};

function ContactFormSmall({
  email: { emailFailure, contactRedirect },
  submitEmail,
}) {
  const router = useRouter();
  useEffect(() => {
    async function toastFunction() {
      await require('react-toastify/dist/ReactToastify.css');
    }
    toastFunction();
  });
  useEffect(() => {
    emailFailure &&
      toast.error('Contact Form Was Not Sent !', {
        position: toast.POSITION.TOP_LEFT,
      });
    contactRedirect && router.push('/contactSuccess');
  }, [emailFailure, contactRedirect]);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <>
      {contactRedirect && router.push('/contactSuccess')}

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
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactFormSmall);
