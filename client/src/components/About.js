import React from 'react';
import happyCustomer from '../img/pledge.jpg';
import happyCustomerSmall from '../img/pledgeSmall.jpg';
function About(props) {
  return (
    <div className='about'>
      <h2 className='about__heading'>Our Pledge</h2>
      <p className='about__text'>
        It is our belief as web design experts that every company, no matter the
        size deserves a website they are proud of at a price they can afford.
        Our #1 commitment is customer satisfaction and we pledge to ensure you
        are 100% satisfied with the result. Whether you are looking for a web
        application, e-commerce site or mobile site design we are the web
        development company for you.
      </p>
      <img
        srcSet={`${happyCustomerSmall} 600w, ${happyCustomer}`}
        src={happyCustomer}
        alt='website design'
        className='about__img'
      />
    </div>
  );
}

export default About;
