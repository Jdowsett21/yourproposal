import React from 'react';
import logo from '../img/svg/logo.svg';
import { Link } from 'react-router-dom';
function Footer(props) {
  return (
    <section className='footer'>
      <div className='footer__main'>
        <div className='footer__column footer__column--1'>
          <img src={logo} alt='Logo' className='footer__logo' />
        </div>
      </div>
      <div className='footer__end'>
        <p className='footer__copyright'>
          © Copyright 2016-2020. All Rights Reserved.
        </p>
        <div className='footer__links'>
          <Link to='/terms' className='footer__link'>
            Terms of Use
          </Link>
          <Link to='/privacy' className='footer__link'>
            Privacy Policy
          </Link>
          <Link to='/documents' className='footer__link'>
            Documents
          </Link>
          <Link to='/contact' className='footer__link'>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
