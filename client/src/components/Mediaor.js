import React from 'react';
import mediaor from '../img/svg/mediaor.svg';
import mediaorImage1 from '../img/svg/mediaorImage1.png';
import mediaorImage2 from '../img/svg/mediaorImage2.png';
import { Link } from 'react-router-dom';
function Mediaor(props) {
  return (
    <>
      <img
        className='portfolio__company-logo portfolio__company-logo--mediaor'
        src={mediaor}
        alt='mediaor'
      />
      <p className='portfolio__description'>
        Mediaor represents the modern company looking to attract new young
        clientele with attractive and captivating styles within the website. The
        use of photo galleries, icons and...{' '}
        <span>
          <Link
            style={{ textDecoration: 'none', color: '#5db9f7' }}
            to='/grivety'
          >
            Learn More
          </Link>
        </span>
      </p>
      <div className='portfolio__image-section'>
        <img
          src={mediaorImage1}
          alt='Mediaor Screenshot'
          className='portfolio__image portfolio__image--mediaor  portfolio__image--mediaor--1'
        />
        <img
          src={mediaorImage2}
          alt='Mediaor Screenshot'
          className='portfolio__image portfolio__image--mediaor  portfolio__image--mediaor--2'
        />
      </div>
    </>
  );
}

export default Mediaor;
