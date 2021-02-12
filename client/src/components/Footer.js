import React from 'react';
import logo from '../img/logo.png';
import logoweb from '../img/logo.webp';
import { Link } from 'react-router-dom';
import sprite from '../img/svg/sprite.svg';
import useWindowDimensions from '../utils/ScreenWidth';
function Footer(props) {
  const { width } = useWindowDimensions();
  return (
    <section className='footer'>
      <div className='footer__main'>
        <picture className='footer__logo'>
          <source srcSet={logoweb} type='image/webp' />

          <source srcSet={logo} type='image/jpeg' />

          <img src={logo} alt='Logo' className='footer__logo' />
        </picture>
        <div className='footer__column footer__column--1'>
          <h3 className='footer__column-header footer__column-header--modifier'>
            Directory
          </h3>
          <div className='footer__link-section'>
            <Link to='/' className='footer__text footer__text--link'>
              Home
            </Link>

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
                {width >= 600 ? (
                  <p className='footer__text footer__contact-info'>
                    1960 Queen Street E, Toronto, ON M4L 1H8
                  </p>
                ) : (
                  <p className='footer__text footer__contact-info'>
                    1960 Queen St,
                    <br /> Toronto,
                    <br /> ON M4L 1H8
                  </p>
                )}
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
                  contact@
                  <br />
                  smarter
                  <br />
                  websolutions.ca
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer__column footer__column--4'>
          <h3 className='footer__column-header'>Social Media</h3>
          <a
            className='footer__social-icon-section'
            href='https://www.facebook.com/smarterwebsolution/'
            target='_blank'
            rel='noreferrer'
          >
            <svg className='footer__social-icon'>
              <use href={sprite + '#facebook'}></use>
            </svg>
          </a>

          <a
            className='footer__social-icon-section'
            href='https://www.instagram.com/smarterwebsolutions/'
            target='_blank'
            rel='noreferrer'
          >
            <svg className='footer__social-icon'>
              <use href={sprite + '#instagram'}></use>
            </svg>
          </a>

          {/* <a className='footer__social-icon-section' href='/'>
            <svg className='footer__social-icon'>
              <use href={sprite + '#linkedin'}></use>
            </svg>
          </a> */}
        </div>

        <p className='footer__copyright'>
          © Copyright 2021. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}

export default Footer;
