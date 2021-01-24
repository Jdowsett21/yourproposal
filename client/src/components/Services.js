import React from 'react';
import sprite from '../img/svg/sprite.svg';
import { Link } from 'react-router-dom';
function Services(props) {
  return (
    <section className='services'>
      <div className='service__header'>
        <h2 className='service__header--heading'>Our Services</h2>
        <p className='service__header--secondary'>
          We offer all services related to web development and will ensure every
          idea you have is realized
        </p>
        <Link to='/services' className='service__button'>
          <p className='service__button-text'>Learn More</p>
        </Link>
      </div>

      <div className='service service--1'>
        <svg className='service__icon'>
          <use href={sprite + '#ux-design'}></use>
        </svg>
        <h4 className='heading-4'>Modern UI/UX Design</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Get the professional site you've always wanted.
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>

      <div className='service service--2'>
        <svg className='service__icon'>
          <use href={sprite + '#coding'}></use>
        </svg>
        <h4 className='heading-4'>Responsive Design</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Your website, looking great, on any device.
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>

      <div className='service service--3'>
        <svg className='service__icon'>
          <use href={sprite + '#ecommerce'}></use>
        </svg>
        <h4 className='heading-4'>Profit Online</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Get your customers shopping you your site, safely and securely.
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>

      <div className='service service--4'>
        <svg className='service__icon'>
          <use href={sprite + '#dashboard'}></use>
        </svg>
        <h4 className='heading-4'>Customized Systems</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Create a custom system for your business.
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>

      <div className='service service--5'>
        <svg className='service__icon'>
          <use href={sprite + '#api'}></use>
        </svg>
        <h4 className='heading-4'>Technology Integration</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Combine technologies to improve your users experiences.
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>

      <div className='service service--6'>
        <svg
          className='service__icon'
          style={{ opacity: '.7', marginRight: '8rem', marginBottom: '4rem' }}
        >
          <use href={sprite + '#android'}></use>
        </svg>
        <svg
          className='service__icon'
          style={{
            opacity: '.8',
            marginLeft: '10rem',
            marginTop: '4rem',
            fill: '#bd80e1',
          }}
        >
          <use href={sprite + '#apple'}></use>
        </svg>
        <h4 className='heading-4' style={{ marginTop: '2.5rem' }}>
          Mobile Flexibility
        </h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Save the expense of building two applications!
          </p>
          <Link to='/services' className='service__button'>
            <p className='service__button-text'>Learn More</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
