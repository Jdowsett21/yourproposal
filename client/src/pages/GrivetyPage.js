import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sprite from '../img/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';
import grivetyLogo from '../img/svg/grivetylogo-1.svg';
import ImageSlider from '../components/ImageSlider';
import NextProjectButton from '../common/NextProjectButton';
import CarouselSection from '../components/Carousel';
import useWindowDimensions from '../utils/ScreenWidth';
import GrivetyCarousel from '../components/GrivetyCarousel';

function GrivetyPage({ color }) {
  function refreshPage() {
    window.location.reload(true);
  }
  const { width } = useWindowDimensions();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const location = useLocation();

  return (
    <>
      <div className='project'>
        <div className='project__company-logo-section'>
          <img
            className='portfolio__company-logo portfolio__company-logo--mediaor'
            src={grivetyLogo}
            alt='mediaor'
          />
        </div>
        <p className='project__description'>
          Grivety is a modern banking web application that displays the power of
          using a database in unison with your web server. Grivety displays data
          in every imaginable... Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quae, ullam ab? Esse possimus perspiciatis sunt
          provident ad, accusantium voluptatibus quisquam.
        </p>
        {width > 770 ? <ImageSlider /> : <GrivetyCarousel />}
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
          color={['#48b461', '#e15361', '#44a2a3']}
          text='Grivety is a prototype budgeting app that is designed to show the
            possibilites that can be created using a full scale application with
            a database on the backend. With Grivety it can be seen that any
            system that your business needs to create is possible. Whether you
            need to be track inventory or manage deliveries, Smarter Web
            Solutions can create your system.'
        />
        <Typeface font='Segoe UI' />
        <Icons
          backgroundColor='#44a2a3'
          icons={[
            '#piggy',
            '#wallet',
            '#funnel',
            '#money',
            '#credit',
            '#graph',
          ]}
          text='It is essential that Grivety had advanced security features to protect sensitive information.  Smarter Web Solutions ensures with every application we create that the highest level of security is used to protect user data, your data'
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
          <Link to='/mediaor' className='project__next-button'>
            <Link to='/mediaor' className='project__next-button--text'>
              Next Project
            </Link>
          </Link>
          <Link to='/mediaor' className='project__next-button-arrow'>
            <svg className='project__next-icon'>
              <use href={sprite + '#play'}></use>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default GrivetyPage;
