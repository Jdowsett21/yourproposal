import React from 'react';
import Banner from '../components/Banner';
import sprite from '../img/svg/sprite.svg';
import ContactFormSmall from '../components/ContactFormSmall';
import contact from '../img/contact.jpg';
import toronto from '../img/toronto.jpg';
function ContactPage(props) {
  return (
    <>
      <Banner img={contact} text='Contact' />
      <div className='contact-page'>
        <div className='contact-page__col-1'>
          <h3 className='contact-page__header'>Get In Touch</h3>
          <ContactFormSmall />
        </div>
        <div
          className='
        contact-page__col-2'
        >
          <h3 className='contact-page__header contact-page__header--1'>
            Our Contact Info
          </h3>
          <img
            src={toronto}
            alt='Toronto'
            className='contact-page__location-image'
          />
          <h5 className='contact-page__location-name'>Toronto</h5>

          <div className='contact-page__info-section'>
            <div className='contact-page__info-section--col-1'>
              <div className='contact-page__info-header-section'>
                <svg className='contact-page__info-icon'>
                  <use href={sprite + '#location'}></use>{' '}
                </svg>
                <h5 className='contact-page__info-header'>Address</h5>
              </div>
              <p className='contact-page__info-specifics'>
                1960 Queen Street E, Toronto, ON M4L 1H8
              </p>

              <div className='contact-page__info-header-section'>
                <svg className='contact-page__info-icon'>
                  <use href={sprite + '#phone-call'}></use>
                </svg>

                <h5 className='contact-page__info-header'>Phone</h5>
              </div>
              <a
                href='tel:416-577-4245'
                className='contact-page__info-specifics'
              >
                416-577-4245
              </a>

              <div className='contact-page__info-header-section'>
                <svg className='contact-page__info-icon'>
                  <use href={sprite + '#email'}></use>
                </svg>

                <h5 className='contact-page__info-header'>Email</h5>
              </div>

              <a
                href='mailto:contact@smarterwebsolutions.ca'
                target='_blank'
                rel='noopener noreferrer'
                className='contact-page__info-specifics'
              >
                contact@smarterwebsolutions.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
