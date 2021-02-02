import React from 'react';
import sprite from '../img/svg/sprite.svg';
import { HashLink as Link } from 'react-router-hash-link';
import useWindowDimensions from '../utils/ScreenWidth';
function Services(props) {
  const { width } = useWindowDimensions();

  return (
    <section className='services'>
      <div className='service__header'>
        <h2 className='service__header--heading'>Our Services</h2>
      </div>
      <p className='service__header--secondary'>
        We offer all services related to web development and will ensure every
        idea you have is realized
      </p>
      <div className='service'>
        <Link
          style={{ textDecoration: 'none' }}
          to='/services#modern'
          className=' service__item'
        >
          <svg className='service__icon'>
            <use href={sprite + '#ux-design'}></use>
          </svg>
          <h4 className='heading-4'>Modern UI/UX Design</h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Get the professional site you've always wanted.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#modern'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Get the professional site you've always wanted.
            </p>
          )}
        </Link>

        <Link
          style={{ textDecoration: 'none' }}
          to='/services#responsive'
          className=' service__item'
        >
          <svg className='service__icon'>
            <use href={sprite + '#coding'}></use>
          </svg>
          <h4 className='heading-4'>Responsive Design</h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Your website, looking great, on any device.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#responsive'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Your website, looking great, on any device.
            </p>
          )}
        </Link>

        <Link
          style={{ textDecoration: 'none' }}
          to='/services#profit'
          className=' service__item'
        >
          <svg className='service__icon'>
            <use href={sprite + '#ecommerce'}></use>
          </svg>
          <h4 className='heading-4'>Profit Online</h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Get your customers shopping you your site, safely and securely.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#profit'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Get your customers shopping you your site, safely and securely.
            </p>
          )}
        </Link>

        <Link
          style={{ textDecoration: 'none' }}
          to='/services#customized'
          className=' service__item'
        >
          <svg className='service__icon'>
            <use href={sprite + '#dashboard'}></use>
          </svg>
          <h4 className='heading-4'>Customized Systems</h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Create a custom system for your business.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#customized'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Create a custom system for your business. Optimize and add
              efficiency to your business
            </p>
          )}
        </Link>

        <Link
          style={{ textDecoration: 'none' }}
          to='/services#technology'
          className=' service__item'
        >
          <svg className='service__icon'>
            <use href={sprite + '#api'}></use>
          </svg>
          <h4 className='heading-4'>Technology Integration</h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <p className='service__item__text'>
                Combine technologies to improve your users experiences.
              </p>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#technology'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text'>
              Combine technologies to improve your users experiences.
            </p>
          )}
        </Link>

        <Link
          style={{ textDecoration: 'none' }}
          to='/services#flexibility'
          className=' service__item'
        >
          <svg
            className='service__icon service-icon--modified'
            style={{
              opacity: '.7',
              marginRight: '8rem',
              marginBottom: width > 500 ? '4rem' : '5rem',
            }}
          >
            <use href={sprite + '#android'}></use>
          </svg>
          <svg
            className='service__icon service-icon--modified'
            style={{
              opacity: '.8',
              marginLeft: '10rem',
              marginTop: width > 500 ? '4rem' : '2.5rem',
              fill: '#bd80e1',
            }}
          >
            <use href={sprite + '#apple'}></use>
          </svg>
          <h4 className='heading-4' style={{ marginTop: '2.5rem' }}>
            Mobile Flexibility
          </h4>
          {width > 5609 ? (
            <div className='service__item__hover-gradient'>
              <Link
                style={{ textDecoration: 'none' }}
                smooth
                to='/services#flexibility'
                className='service__item__button'
              >
                <p className='service__button-text'>Learn More</p>
              </Link>
            </div>
          ) : (
            <p className='service__item__text' style={{ marginTop: '3rem' }}>
              Save the expense of building two applications!
            </p>
          )}
        </Link>
      </div>
    </section>
  );
}

export default Services;
