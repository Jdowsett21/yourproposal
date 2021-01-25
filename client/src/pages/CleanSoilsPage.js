import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cleanSoilsFan from '../img/svg/cleanSoilsFan.svg';
import sprite from '../img/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';

function CleanSoilsPage(props) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const location = useLocation();
  console.log(
    '🚀 ~ file: CleanSoilsPage.js ~ line 12 ~ CleanSoilsPage ~ location',
    location
  );
  return (
    <>
      <div className='project'>
        <div className='project__company-logo-section'>
          <svg className='portfolio__company-logo'>
            <use href={sprite + '#cleanSoils'}></use>
          </svg>
        </div>
        <p className='project__description'>
          Grivety is a modern banking web application that displays the power of
          using a database in unison with your web server. Grivety displays data
          in every imaginable... Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quae, ullam ab? Esse possimus perspiciatis sunt
          provident ad, accusantium voluptatibus quisquam.
        </p>

        <img
          src={cleanSoilsFan}
          alt='grivety Screenshot'
          className='project__image project__image--grivety'
        />
        <h2
          className={
            inView
              ? 'project__large-header--visible project__large-header'
              : 'project__large-header'
          }
          ref={ref}
        >
          Style
          <span
            className={
              inView
                ? 'project__large-header--visible project__large-header project__large-header--1'
                : 'project__large-header project__large-header--1'
            }
          >
            Zone
          </span>
        </h2>
        <ColorPalette />
        <Typeface />
        <Icons />
        {/* <h2 className='project__large-header'>
        Final
        <span className='project__large-header project__large-header--1'>
          Product
        </span>
      </h2> */}
        {/* <div className='project__final-image-section'></div>
      <h4 className='project__deliverables-header'>Deliverables</h4>
      <div className='project__deliverables project__deliverables--1'>
        <svg className='project__project-icon'>
          <use href={CleanSoilsSprite + '#reduction'}></use>
        </svg>
        <h4 className='project__deliverables--title'>Admin Panel</h4>
        <p className='project__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
        project__deliverables
      </div>
      <div className='project__deliverables project__deliverables--2'>
        <svg className='project__deliverable-icon'>
          <use></use>
        </svg>
        <h4 className='project__deliverables--title'>Admin Panel</h4>
        <p className='project__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
      </div> */}

        <h2 className='project__contact-header'>Contact Us</h2>
        <ContactUsProject />

        <div className='project__next-button-section'>
          <button className='project__next-button'>
            <Link
              to={
                location.pathname === '/cleanSoils'
                  ? '/grivety'
                  : location.pathname === 'grivety'
                  ? '/mediaor'
                  : '/cleanSoils'
              }
              className='project__next-button--text'
            >
              Next Project
            </Link>
          </button>
          <Link
            to={
              location.pathname === '/cleanSoils'
                ? '/grivety'
                : location.pathname === '/grivety'
                ? '/mediaor'
                : '/cleanSoils'
            }
            className='project__next-button-arrow'
          >
            <svg className='project__next-icon'>
              <use href={sprite + '#play'}></use>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CleanSoilsPage;
