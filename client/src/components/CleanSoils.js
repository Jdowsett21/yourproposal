import React from 'react';
import cleanSoils from '../img/cleanSoils1.png';
import cleanSoilsSmall from '../img/cleanSoils1Small.png';
import cleanSoils1 from '../img/cleanSoils2.png';
import cleanSoils1Small from '../img/cleanSoils2Small.png';
import cleanSoilsweb from '../img/cleanSoils1.webp';
import cleanSoilsSmallweb from '../img/cleanSoils1Small.webp';
import cleanSoils1web from '../img/cleanSoils2.webp';
import cleanSoils1Smallweb from '../img/cleanSoils2Small.webp';
import sprite from '../img/svg/sprite.svg';
import { Link } from 'react-router-dom';

function CleanSoils(props) {
  return (
    <>
      <svg className='portfolio__company-logo'>
        <use href={sprite + '#cleanSoils'}></use>
      </svg>
      <p className='portfolio__description'>
        Clean Soils wanted to build a modern website to rival their competitors.
        The minimalistic animation effects and sharp design provide users with a
        exceptional experience and...{' '}
        <span>
          <Link
            style={{ textDecoration: 'none', color: '#5db9f7' }}
            to='/cleanSoils'
          >
            Learn More
          </Link>
        </span>
      </p>
      <div className='portfolio__image-section'>
        <picture>
          <source
            srcSet={`${cleanSoils1Smallweb} 600w, ${cleanSoils1web}`}
            type='image/webp'
          />
          <source
            srcSet={`${cleanSoils1} 600w, ${cleanSoils1Small}`}
            type='image/jpeg'
          />
          <img
            src={cleanSoils1}
            alt='Mediaor Screenshot'
            className='portfolio__image portfolio__image--1'
            loading='lazy'
          />
        </picture>
        <picture>
          <source
            srcSet={`${cleanSoilsSmallweb} 600w, ${cleanSoilsweb}`}
            type='image/webp'
          />
          <source
            srcSet={`${cleanSoils} 600w, ${cleanSoilsSmall}`}
            type='image/jpeg'
          />
          <img
            src={cleanSoils}
            alt='Mediaor Screenshot'
            className='portfolio__image portfolio__image--2'
            loading='lazy'
          />
        </picture>
      </div>
    </>
  );
}

export default CleanSoils;
