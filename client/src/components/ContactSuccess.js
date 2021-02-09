import React from 'react';
import { resetContactRedirect } from '../actions/EmailActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ContactSuccess({ resetContactRedirect }) {
  return (
    <div className='contact-success'>
      <h3 className='contact-success__text'>
        Thank you for contacting Smarter Web Solutions. We have successfully
        received your inquiry. Someone will contact you as soon as possible.
      </h3>
      <button
        className='contact-success__button'
        onClick={() => {
          console.log('hello');
          resetContactRedirect();
        }}
      >
        <Link
          to='/contact'
          style={{
            textDecoration: 'none',
            color: '#fff',
          }}
        >
          Return To Contact Page
        </Link>
      </button>
    </div>
  );
}

export default connect(null, { resetContactRedirect })(ContactSuccess);
