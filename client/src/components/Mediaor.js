import React from 'react';
import mediaor from '../img/svg/mediaor.svg';
import mediaorImage1 from '../img/mediaorImage1.png';
import mediaorImage1Small from '../img/mediaorImage1Small.png';
import mediaorImage2 from '../img/mediaorImage2.png';
import mediaorImage2Small from '../img/mediaorImage2Small.png';
import mediaorImageweb1 from '../img/mediaorImage1.webp';
import mediaorImagewebSmall1 from '../img/mediaorImage1Small.webp';
import mediaorImageweb2 from '../img/mediaorImage2.webp';
import mediaorImageweb2Small from '../img/mediaorImage1Small.webp';
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
        <picture className='portfolio__image-picture '>
          <source
            srcSet={`${mediaorImagewebSmall1} 600w, ${mediaorImageweb1}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage1} 600w, ${mediaorImage1Small}`}
            type='image/jpeg'
          />
          <img
            src={mediaorImage1}
            alt='Mediaor Screenshot'
            className='project__image--mediaor'
            loading='lazy'
          />
        </picture>
        <picture className='portfolio__image-picture '>
          <source
            srcSet={`${mediaorImageweb2Small} 600w, ${mediaorImageweb2}`}
            type='image/webp'
          />
          <source
            srcSet={`${mediaorImage2} 600w, ${mediaorImage2Small}`}
            type='image/jpeg'
          />
          <img
            src={mediaorImage2}
            alt='Mediaor Screenshot'
            className=' project__image--mediaor portfolio__image--mediaor--1  '
            loading='lazy'
          />
        </picture>
      </div>
    </>
  );
}

export default Mediaor;
