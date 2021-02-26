import React, { useEffect } from 'react';

function FormSignatureInput({ name }) {
  return (
    <Formik
      initialValues={{ name, signature: '' }}
      onSubmit={(values) => {
        setSignature(values);
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
export default connect(mapStateToProps, { setSignature })(FormSignatureInput);
