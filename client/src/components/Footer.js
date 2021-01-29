import React from 'react';
import logo from '../img/svg/logo3.svg';
import { Link } from 'react-router-dom';
import sprite from '../img/svg/sprite.svg';

function Footer(props) {
  return (
    <section className='footer'>
      <div className='footer__main'>
        <div className='footer__column footer__column--1'>
          <img src={logo} alt='Logo' className='footer__logo' />
          <h3 className='footer__column-header footer__column-header--modifier'>
            Directory
          </h3>
          <div className='footer__link-section'>
            <Link to='/services' className='footer__text footer__text--link'>
              Services
            </Link>
            <Link to='/process' className='footer__text footer__text--link'>
              Process
            </Link>
            <Link to='/portfolio' className='footer__text footer__text--link'>
              Portfolio
            </Link>
            <Link to='/technical' className='footer__text footer__text--link'>
              Technical
            </Link>
            <Link to='/contact' className='footer__text footer__text--link'>
              Contact
            </Link>
          </div>
        </div>
        <div className='footer__column footer__column--2'>
          <h3 className='footer__column-header'>About Us</h3>
          <p className='footer__text footer__text--paragraph'>
            Smarter Web Solutions is a development company based in Toronto. We
            specialize in web development and custom online software.
          </p>
        </div>
        <div className='footer__column footer__column--3'>
          <h3 className='footer__column-header'>Contact Info</h3>
          <div className='footer__info-section'>
            <div className='footer__info-section--col-1'>
              <div className='footer__info-header-section'>
                <svg className='footer__info-icon'>
                  <use href={sprite + '#location'}></use>{' '}
                </svg>
                <p className='footer__text footer__contact-info'>
                  1960 Queen Street E, Toronto, ON M4L 1H8
                </p>
              </div>

              <div className='footer__info-header-section'>
                <svg className='footer__info-icon'>
                  <use href={sprite + '#phone-call'}></use>
                </svg>
                <a
                  href='tel:416-577-4245'
                  className='footer__text footer__contact-info'
                >
                  416-577-4245
                </a>
              </div>

              <div className='footer__info-header-section'>
                <svg className='footer__info-icon'>
                  <use href={sprite + '#email'}></use>
                </svg>
                <a
                  href='mailto:contact@smarterwebsolutions.ca'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__text footer__contact-info'
                >
                  contact@smarterwebsolutions.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__column footer__column--4'>
          <h3 className='footer__column-header'>Social Media</h3>
        </div>

        <p className='footer__copyright'>
          © Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
