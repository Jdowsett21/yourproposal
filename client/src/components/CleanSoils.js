import React from 'react';
import cleanSoils from '../img/cleansoils1.png';
import cleanSoils1 from '../img/cleansoils2.png';
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
        <img
          src={cleanSoils1}
          alt=''
          className='portfolio__image portfolio__image--1'
        />
        <img
          src={cleanSoils}
          alt=''
          className='portfolio__image portfolio__image--2'
        />
      </div>
    </>
  );
}

export default CleanSoils;
