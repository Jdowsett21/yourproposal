import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { setSignature } from '../actions/VariableActions.js';
import { toast, ToastContainer } from 'react-toastify';
import MyTextField from '../common/MyTextField';

function ContactForm({ name }) {
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
    <Formik
      initialValues={{ name, signature: '' }}
      onSubmit={(values) => {
        setSignature(values, 'typed', 'signed');
        router.push('/Accepted');
        isSigned(true);
      }}
      validationSchema={ContactSchema}
    >
      {() => (
        <Form>
          <MyTextField name='signature' type='text' required />
          <button type='submit' className='proposal__accept-button'>
            Accept
          </button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { setSignature })(ContactForm);
