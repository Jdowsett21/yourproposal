import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cleanSoilsFan from '../img/cleanSoilsFan.jpg';
import sprite from '../img/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';

function CleanSoilsPage(props) {
  function refreshPage() {
    window.location.reload(true);
  }
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const location = useLocation();

  return (
    <>
      <div className='project'>
        <svg className='portfolio__company-logo'>
          <use href={sprite + '#cleanSoils'}></use>
        </svg>
        <p className='project__description'>
          Clean Soils was looking to upgrade their site to professional look so
          they could compete with their competition. They received a website
          with the latest features and styles, letting their customers know that
          they mean business. Keeping the website clean and concise was their #1
          priority and Smarter Web Solutions delivered on their ask.
        </p>

        <img
          src={cleanSoilsFan}
          alt='grivety Screenshot'
          className='project__image'
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
        <ColorPalette
          color={['#25a7f4', '#77b609', '#264977']}
          text='Clean Soils wanted to quickly display all of its services so that the site immediately grabbed the users attention.  We made sure to incorporate the Clean Soils color palette to leave a lasting reminder of the Clean Soils brand.'
        />
        <Typeface font='Montserrat' />
        <Icons
          backgroundColor='#25a7f4'
          icons={[
            '#construction',
            '#icon-utilities',
            '#icon-municipal',
            '#icon-tree',
            '#icon-fire',
            '#icon-lab',
          ]}
          text='We wanted to create a user interface that was easy to use on any device,
          whether a laptop or mobile device. The website has creative animations to
          capture the audiences attention and unique icons to visually demonstrate
          the basics of Clean Soils. Users will leave the Clean Soils site fully
          understanding what Clean Soils represents.'
        />

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

        <div
          className='project__next-button-section'
          onClick={() => refreshPage()}
        >
          <Link to='/grivety' className='project__next-button'>
            <Link to='/grivety' className='project__next-button--text'>
              Next Project
            </Link>
          </Link>
          <Link to='/grivety' className='project__next-button-arrow'>
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
