import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cleanSoilsFan from '../img/svg/cleanSoilsFan.svg';
import CleanSoilsSprite from '../img/svg/CleanSoilsSprite.svg';
import sprite from '../img/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import backgroundImage from '../img/svg/background.svg';
import Gradient from '../common/Gradient';

function MediaorPage(props) {
  const location = useLocation();
  console.log(
    '🚀 ~ file: CleanSoilsPage.js ~ line 12 ~ CleanSoilsPage ~ location',
    location
  );
  return (
    <>
      <div className='project'>
        {/* <img
          src={backgroundImage}
          alt='backgroundImage'
          className='project__background'
        /> */}
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
        <h2 className='project__large-header'>
          Style
          <span className='project__large-header project__large-header--1'>
            Zone
          </span>
        </h2>

        <h4 className='project__section-header'>Colour Palette</h4>
        <div className='project__design-specifics'>
          <div className='project__color-shapes'>
            <div
              className='project__color-item project__color-item--1 '
              style={{ backgroundColor: '#25a7f4' }}
            >
              <div className='project__color-label-section'>
                <p className='project__color-label'>#25a7f4</p>
              </div>
            </div>
            <div
              className='project__color-item project__color-item--2 '
              style={{ backgroundColor: '#77b609' }}
            >
              <div className='project__color-label-section'>
                <p className='project__color-label'>#77b609</p>
              </div>
            </div>
            <div
              className='project__color-item project__color-item--3 '
              style={{ backgroundColor: '#264977' }}
            >
              <div className='project__color-label-section'>
                <p className='project__color-label'>#264977</p>
              </div>
            </div>
            <p className='project__explanation'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium enim officia, quisquam, pariatur perspiciatis nesciunt
              tenetur iure soluta illo numquam, corrupti reiciendis. Doloribus,
              eum eaque? Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum ipsa tempore labore, consectetur expedita voluptas
              recusandae vero id nemo itaque aliquid, eveniet dicta excepturi
              mollitia!
            </p>
          </div>
        </div>
        <h4 className='project__section-header'>Typeface</h4>
        <div className='project__font-heading-section'>
          <div className='project__font-heading project__font-heading--1'>
            <h2 className='project__font-example'>Ab Bb</h2>
          </div>
          <h4 className='project__font-description project__font-description--1 '>
            Heading
          </h4>
          <div className='project__font-heading project__font-heading--2'>
            <h2 className='project__font-example project__font-example--2'>
              Aa Bb
            </h2>
          </div>
          <h4 className='project__font-description project__font-description--2 '>
            Sub-Heading
          </h4>
        </div>
        <h3 className='project__section-header'>Icons</h3>
        <div className='project__icon-section'>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#construction'}></use>
            </svg>
          </div>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#icon-utilities'}></use>
            </svg>
          </div>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#icon-municipal'}></use>
            </svg>
          </div>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#icon-tree'}></use>
            </svg>
          </div>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#soil'}></use>
            </svg>
          </div>
          <div className='project__icon-background'>
            {' '}
            <svg className='project__project-icon'>
              <use href={CleanSoilsSprite + '#drop'}></use>
            </svg>
          </div>
          <p className='project__explanation project__explanation--icon'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            odio dolor. Nostrum voluptate aperiam provident eos totam, esse ut
            explicabo sequi numquam mollitia dolores quidem!
          </p>
        </div>

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

export default MediaorPage;
