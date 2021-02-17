import React, { useState } from 'react';
import Grivety from '../components/Grivety';
import Mediaor from '../components/Mediaor';
import CleanSoils from '../components/CleanSoils';
import grivetyLogo from '../public/img/svg/grivetylogo-1.svg';
import sprite from '../public/img/svg/sprite.svg';
import mediaor from '../public/img/svg/mediaor.svg';
import Link from 'next/link';
import backgroundImage from '../public/img/svg/background.svg';
import Gradient from '../common/Gradient';
import { useMediaQuery } from '../utils/ScreenWidth';

function Portfolio(props) {
  const [app, setApp] = useState('cleanSoils');
  const [app1, setApp1] = useState('cleanSoils');

  const mediaQuery = useMediaQuery(600);
  const mediaQuery2 = useMediaQuery(450);
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
          <Link href='/contact'>
            <button className='portfolio__start-project portfolio__link'>
              Start Project
            </button>
          </Link>
          {!mediaQuery ? (
            <div className='portfolio__logo-bottom-section'>
              <svg
                className='portfolio__logo--bottom'
                onClick={() => setApp('cleanSoils')}
              >
                <use href={sprite + '#cleanSoils'}></use>
              </svg>
              <img
                className='portfolio__logo--bottom'
                alt='grivety logo'
                src={grivetyLogo}
                onClick={() => setApp('grivety')}
              />
              <img
                src={mediaor}
                className='portfolio__logo--bottom portfolio__logo--bottom--mediaor'
                style={{ paddingRight: '1rem' }}
                alt='mediaor'
                onClick={() => setApp('mediaor')}
              />
            </div>
          ) : mediaQuery && !mediaQuery2 ? (
            <div className='portfolio__logo-bottom-section'>
              {app1 === 'cleanSoils' ? (
                <>
                  <svg
                    className='portfolio__logo--bottom'
                    onClick={() => setApp('cleanSoils')}
                  >
                    <use href={sprite + '#cleanSoils'}></use>
                  </svg>
                  <img
                    src={grivetyLogo}
                    className='portfolio__logo--bottom'
                    alt='grivety'
                    onClick={() => setApp('grivety')}
                  ></img>
                </>
              ) : app1 === 'grivety' ? (
                <>
                  <img
                    src={grivetyLogo}
                    className='portfolio__logo--bottom'
                    alt='grivety'
                    onClick={() => setApp('grivety')}
                  ></img>
                  <img
                    src={mediaor}
                    className='portfolio__logo--bottom '
                    alt='mediaor'
                    onClick={() => setApp('mediaor')}
                  ></img>
                </>
              ) : (
                <>
                  <img
                    src={mediaor}
                    className='portfolio__logo--bottom '
                    alt='mediaor'
                    onClick={() => setApp('mediaor')}
                  ></img>
                  <svg
                    className='portfolio__logo--bottom'
                    onClick={() => setApp('cleanSoils')}
                  >
                    <use href={sprite + '#cleanSoils'}></use>
                  </svg>
                </>
              )}
              <svg
                className='portfolio__next-button'
                onClick={() =>
                  setApp1(
                    app1 === 'cleanSoils'
                      ? 'grivety'
                      : app1 === 'grivety'
                      ? 'mediaor'
                      : 'cleanSoils'
                  )
                }
              >
                <use href={sprite + '#arrow'}></use>
              </svg>
            </div>
          ) : (
            <div className='portfolio__logo-bottom-section'>
              {app === 'cleanSoils' ? (
                <svg
                  className='portfolio__logo--bottom'
                  onClick={() => setApp('cleanSoils')}
                >
                  <use href={sprite + '#cleanSoils'}></use>
                </svg>
              ) : app === 'grivety' ? (
                <img
                  src={grivetyLogo}
                  className='portfolio__logo--bottom'
                  alt='grivety'
                  onClick={() => setApp('grivety')}
                ></img>
              ) : (
                <img
                  src={mediaor}
                  className='portfolio__logo--bottom '
                  alt='mediaor'
                  onClick={() => setApp('mediaor')}
                ></img>
              )}
              <svg
                className='portfolio__next-button'
                onClick={() =>
                  setApp(
                    app === 'cleanSoils'
                      ? 'grivety'
                      : app === 'grivety'
                      ? 'mediaor'
                      : 'cleanSoils'
                  )
                }
              >
                <use href={sprite + '#arrow'}></use>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;