import React from 'react';
import happyCustomer from '../img/pledge.jpg';
import happyCustomer2 from '../img/pledge-800.jpg';
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
      <img
        // srcset='img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w'
        // sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
        src={happyCustomer}
        alt=''
        className='about__img'
      />
    </div>
  );
}

export default About;
