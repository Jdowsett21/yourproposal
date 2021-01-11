import React from 'react';
import sprite from '../img/sprite.svg';
function Services(props) {
  return (
    <section className='services'>
      <div className='service__header'>
        <h2 className='service__header--heading'>Our Services</h2>
        <p className='service__header--secondary'>
          We offer all services related to web development and will ensure every
          idea you have is realized
        </p>
      </div>

      <div className='service service--1'>
        <svg className='service__icon'>
          <use href={sprite + '#ux-design'}></use>
        </svg>
        <h4 className='heading-4'>Modern UI/UX Design</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            We build a beautiful and modern User Experience in every website we
            develop. We will provide a full design concept and wireframe
            ensuring you are satisfied before coding begins.
          </p>
        </div>
      </div>

      <div className='service service--2'>
        <svg className='service__icon'>
          <use href={sprite + '#coding'}></use>
        </svg>
        <h4 className='heading-4'>Responsive Design</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Every single one of our sites is just a user friendly and well
            designed on mobile applications as on Desktops. Your customers will
            love your site no matter what device they are using
          </p>
        </div>
      </div>

      <div className='service service--3'>
        <svg className='service__icon'>
          <use href={sprite + '#web-security'}></use>
        </svg>
        <h4 className='heading-4'>Secure Payments</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            We provide end to end encrypted shopping experience for your
            customers so they can rest assured their information is protect and
            can shop at ease.{' '}
          </p>
        </div>
      </div>

      <div className='service service--4'>
        <svg className='service__icon'>
          <use href={sprite + '#bug'}></use>
        </svg>
        <h4 className='heading-4'>Error Free Guarantee</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            We have a rigorous testing process for every site before it enters
            production. We also have a lifetime warranty to fix any bugs that
            might occur and will fix them free of charge
          </p>
        </div>
      </div>

      <div className='service service--5'>
        <svg className='service__icon'>
          <use href={sprite + '#api'}></use>
        </svg>
        <h4 className='heading-4'>Technology Integration</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            Combine different technologies used in your business to create
            seamless processes and improve your users experiences.
          </p>
        </div>
      </div>

      <div className='service service--6'>
        <svg className='service__icon'>
          <use href={sprite + '#database'}></use>
        </svg>
        <h4 className='heading-4'>Database Management</h4>
        <div className='service__hover-gradient'>
          <p className='service__text'>
            In order for customers to have their own accounts or any information
            to be saved and updated by the user or yourself, you will need a
            database. We will ensure you and your users can perform whatever
            tasks neccesary on your site.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
