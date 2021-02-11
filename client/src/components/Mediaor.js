import React from 'react';
import mediaor from '../img/svg/mediaor.svg';
import mediaorImage1 from '../img/mediaorImage1.png';
import mediaorImage1Small from '../img/mediaorImage1Small.png';
import mediaorImage2 from '../img/mediaorImage2.png';
import mediaorImage2Small from '../img/mediaorImage2Small.png';

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
            to='/mediaor'
          >
            Learn More
          </Link>
        </span>
      </p>
      <div className='portfolio__image-section'>
        <img
          src={mediaorImage1}
          srcSet={`${mediaorImage1Small} 600w, ${mediaorImage1}`}
          alt='Mediaor Screenshot'
          className='portfolio__image portfolio__image--mediaor  portfolio__image--mediaor--1'
        />
        <img
          src={mediaorImage2}
          srcSet={`${mediaorImage2Small} 600w, ${mediaorImage2}`}
          alt='Mediaor Screenshot'
          className='portfolio__image portfolio__image--mediaor  portfolio__image--mediaor--2'
        />
      </div>
    </>
  );
}

export default Mediaor;
