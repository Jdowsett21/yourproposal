import React from 'react';
import moneytrackerImage from '../img/svg/grivetyImage4.svg';
import grivetyLogo from '../img/svg/grivetylogo-1.svg';
import { Link } from 'react-router-dom';

function Grivety(props) {
  return (
    <>
      <img
        src={grivetyLogo}
        className='portfolio__company-logo'
        alt='grivety logo'
      />
      <p className='portfolio__description'>
        Grivety is a modern banking web application that displays the power of
        using a database in unison with your web server. Grivety displays data
        in every imaginable...{' '}
        <span>
          <Link
            to='/grivety'
            style={{ textDecoration: 'none', color: '#5db9f7' }}
          >
            Learn More
          </Link>
        </span>
      </p>{' '}
      <div className='portfolio__image-section'>
        <img
          src={moneytrackerImage}
          alt='grivety Screenshot'
          className='portfolio__image portfolio__image--grivety'
        />
      </div>
    </>
  );
}

export default Grivety;
