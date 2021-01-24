import React, { useState } from 'react';
import BackgroundVideo from '../common/BackgroundVideo';
import Grivety from '../components/Grivety';
import Mediaor from '../components/Mediaor';
import CleanSoils from '../components/CleanSoils';
import grivetyLogo from '../img/svg/grivetylogo-1.svg';
import sprite from '../img/svg/sprite.svg';
import mediaor from '../img/svg/mediaor.svg';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/svg/background.svg';
import Gradient from '../common/Gradient';

function Portfolio(props) {
  const [app, setApp] = useState('cleanSoils');
  return (
    <div className='portfolio'>
      <Gradient color='white' />
      <img
        src={backgroundImage}
        alt='backgroundImage'
        className='portfolio__background'
      />
      <div className='portfolio__grid'>
        {app === 'cleanSoils' ? (
          <CleanSoils />
        ) : app === 'grivety' ? (
          <Grivety />
        ) : (
          <Mediaor />
        )}

        <div className='portfolio__bottom-menu'>
          <button className='portfolio__start-project'>
            <Link className='portfolio__link' to='/contact'>
              Start Project
            </Link>
          </button>
          <div className='portfolio__logo-bottom-section'>
            <svg
              className='portfolio__logo--bottom'
              onClick={() => setApp('cleanSoils')}
            >
              <use href={sprite + '#cleanSoils'}></use>
            </svg>
            <img
              src={grivetyLogo}
              style={{ paddingTop: '1rem' }}
              className='portfolio__logo--bottom'
              alt='grivety'
              onClick={() => setApp('grivety')}
            ></img>
            <img
              src={mediaor}
              className='portfolio__logo--bottom'
              style={{ paddingTop: '1rem' }}
              alt='mediaor'
              onClick={() => setApp('mediaor')}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
