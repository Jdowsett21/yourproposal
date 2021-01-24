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
          <h3 className='contact-page__header'>Our Contact Location</h3>
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
                1960 Queen Street E,
              </p>
              <p className='contact-page__info-specifics  '>Toronto, ON</p>
              <p className='contact-page__info-specifics '>M4L 1H8</p>
            </div>
            <div className='contact-page__info-section--col-2'>
              <div className='contact-page__info-header-section'>
                <svg className='contact-page__info-icon'>
                  <use href={sprite + '#phone-call'}></use>
                </svg>

                <h5 className='contact-page__info-header'>Phone/Email</h5>
              </div>
              <p className='contact-page__info-specifics'>416-577-4245</p>
              <p className='contact-page__info-specifics'>
                contact@smarterwebsolutions.ca
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
