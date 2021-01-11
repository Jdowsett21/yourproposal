import React from 'react';
import happyCustomer from '../img/Screen Shot 2021-01-10 at 2.30.49 PM.png';
function About(props) {
  return (
    <div className='about'>
      <h2 className='about__heading'>Our Pledge</h2>
      <p className='about__text'>
        It is our belief at Smarter Web Solutions that every company, no matter
        the size deserves a website they are proud of at a price they can
        afford. Our #1 commitment is customer satisfaction and we pledge to to
        ensure you are 100% satisfied with the result.
      </p>
      <img src={happyCustomer} alt='' className='about__img' />
    </div>
  );
}

export default About;
