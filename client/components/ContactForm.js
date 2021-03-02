import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { setSignature } from '../actions/VariableActions.js';
import { toast, ToastContainer } from 'react-toastify';
import MyTextField from '../common/MyTextField';

function ContactForm({ name, setSignature }) {
  const router = useRouter();
  useEffect(() => {
    async function toastFunction() {
      await require('react-toastify/dist/ReactToastify.css');
    }
    toastFunction();
  });

  const ContactSchema = Yup.object().shape({
    signature: Yup.string().required('Signature is required'),
  });

  return (
    <div className='signing-box__type-input'>
      <Formik
        initialValues={{ name, signature: '' }}
        onSubmit={(values) => {
          setSignature(values, '');
          router.push('/Accepted');
        }}
        validationSchema={ContactSchema}
      >
        {() => (
          <Form>
            <MyTextField name='signature' type='text' required />
            <button
              type='submit'
              onClick={() => {
                setSignature();
              }}
              className='proposal__accept-button'
            >
              Accept
            </button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(null, { setSignature })(ContactForm);
