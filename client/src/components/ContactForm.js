import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { submitEmail } from '../actions/EmailActions.js';
import { toast, ToastContainer } from 'react-toastify';
import MyTextField from '../common/MyTextField';
import withRouter from '../common/NavBarList';

function ContactForm({
  email: { emailSuccess, emailFailure, contactRedirect },
  submitEmail,
}) {
  useEffect(() => {
    async function toastFunction() {
      await require('react-toastify/dist/ReactToastify.css');
    }
    toastFunction();
  });
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  useEffect(() => {
    emailFailure &&
      toast.error('Contact Form Was Not Sent !', {
        position: toast.POSITION.TOP_LEFT,
      });
  }, [emailFailure]);

  return (
    <>
      {contactRedirect && <Redirect to='/contactSuccess' />}
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
                  We would be delighted to hear your ideas and discuss how we
                  can help you!
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
                <ToastContainer />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactForm);
