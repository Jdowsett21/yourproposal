import React from 'react';
import { Form, Formik, useField } from 'formik';
import { connect } from 'react-redux';
import FormInput from '../common/FormInput.js';
import { setCompanyInfo } from '../actions/VariableActions';
const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      helpertext={errorText}
      modification='--project'
      error={errorText ? 'true' : 'false'}
      form='project__'
    />
  );
};

function companyInfo({ setCompanyInfo }) {
  return (
    <div className='contact-info__form' id='contact-form'>
      <Formik
        initialValues={{
          companyName: '',
          color1: '',
          color2: '',
          date: '',
          ipAddress: '',
          signatureText: '',
          signatureImage: '',
        }}
        onSubmit={(values) => {
          setCompanyInfo(values);
        }}
      >
        {() => (
          <Form>
            <div className='project__form-area'>
              <label className='project__form-label'>Name &#42;</label>
              <MyTextField
                ariaLabel='companyName'
                name='companyName'
                type='text'
                required
                placeholder='Name'
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>color1 &#42;</label>
              <MyTextField
                id='color1'
                name='color1'
                type='color1'
                placeholder='color1'
                ariaLabel='color1'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>color2</label>
              <MyTextField
                ariaLabel='color2'
                name='color2'
                type='text'
                placeholder='color2'
                required
              />
            </div>
            <button type='submit' text='Submit' className='project__button'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(null, { setCompanyInfo })(companyInfo);
