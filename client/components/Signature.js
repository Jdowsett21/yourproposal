import React, { useRef, useCallback, useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { setSignature } from '../actions/VariableActions.js';
import { toast, ToastContainer } from 'react-toastify';
import MyTextField from '../common/MyTextField';
import { useRouter } from 'next/router';
function Signature({ name, widthRatio, setSignature }) {
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
  const [signatureURL, setSignatureURL] = useState('');

  const sigCanvas = useRef({});
  const sigPad = useRef({});

  const setSignatureOnChange = () => {
    const dataURL = sigCanvas.current.toDataURL();
    setSignatureURL(dataURL);
  };
  const clearInput = () => {
    sigPad.current.clear();
  };

  const measuredRef = useCallback(
    (node) => {
      if (node !== null) {
        sigCanvas.current = node.getCanvas();
        sigPad.current = node.getSignaturePad();
      }
    },
    [widthRatio]
  );

  return (
    <>
      <div className='signing-box__input'>
        <SignatureCanvas
          ref={measuredRef}
          penColor='black'
          // onEnd={}
          canvasProps={{ width: '400%', height: '70%' }}
        />
      </div>
      <button
        className='signing-box__clear'
        onClick={() => {
          clearInput();
          setSignatureURL('');
        }}
      >
        Clear
      </button>
      <p className='signing-box__type-name'>Please type full name (required)</p>
      <div className='signing-box__type-input'>
        <Formik
          initialValues={{ name, signature: '' }}
          onSubmit={(values) => {
            setSignature(values, signatureURL);
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
                  setSignatureOnChange();
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
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { setSignature })(Signature);
