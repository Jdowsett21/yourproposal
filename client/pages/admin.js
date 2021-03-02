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
          newBiz: '',
          averageSalePrice: '',
          conversionRate: '',
          numberOfSales: '',
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
            <div className='project__form-area'>
              <label className='project__form-label'>newBiz</label>
              <MyTextField
                ariaLabel='newBiz'
                name='newBiz'
                type='text'
                placeholder='newBiz'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>averageSalePrice</label>
              <MyTextField
                ariaLabel='averageSalePrice'
                name='averageSalePrice'
                type='text'
                placeholder='averageSalePrice'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>conversionRate</label>
              <MyTextField
                ariaLabel='conversionRate'
                name='conversionRate'
                type='text'
                placeholder='conversionRate'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>conversionOfLeads</label>
              <MyTextField
                ariaLabel='conversionOfLeads'
                name='conversionOfLeads'
                type='text'
                placeholder='conversionOfLeads'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>numberOfLeads</label>
              <MyTextField
                ariaLabel='numberOfLeads'
                name='numberOfLeads'
                type='text'
                placeholder='numberOfLeads'
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
