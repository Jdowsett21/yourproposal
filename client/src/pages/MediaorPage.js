import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sprite from '../img/svg/sprite.svg';
import ContactUsProject from '../components/ContactUsProject';
import ColorPalette from '../components/ColorPalette';
import { useInView } from 'react-intersection-observer';
import Typeface from '../components/Typeface';
import Icons from '../components/Icons';
import mediaor from '../img/svg/mediaor.svg';
import mediaorImage1 from '../img/mediaorImage1.png';
import mediaorImage1Small from '../img/mediaorImage1Small.png';
import mediaorImage2 from '../img/mediaorImage2.png';
import mediaorImage2Small from '../img/mediaorImage2Small.png';
import mediaorImageweb1 from '../img/mediaorImage1.webp';
import mediaorImagewebSmall1 from '../img/mediaorImage1Small.webp';
import mediaorImageweb2 from '../img/mediaorImage2.webp';
import mediaorImageweb2Small from '../img/mediaorImage1Small.webp';

function MediaorPage() {
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
        <div className='project__company-logo-section'>
          <img
            className='portfolio__company-logo portfolio__company-logo--mediaor'
            src={mediaor}
            alt='mediaor'
          />
        </div>
        <p className='project__description'>
          Mediaor shows the possibilites of how media can be creatively
          displayed, especially for a business that needs their content to be
          front and center. Mediaor is a digital media application that displays
          blog posts, image galleries and videos.
        </p>
        <div className='portfolio__image-section'>
          <picture className='project__image project__image--mediaor'>
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
              className='project__image project__image--mediaor '
              loading='lazy'
            />
          </picture>
          <picture className='project__image project__image--mediaor  '>
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
              className='project__image project__image--mediaor  '
              loading='lazy'
            />
          </picture>
        </div>
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
        <ColorPalette color={['#ffba40', '#dc3545', '#343a40']} />
        <Typeface font='Helvetica Neue' />
        <Icons
          backgroundColor='#dc3545'
          icons={[
            '#bullhorn',
            '#cloud-solid',
            '#cog',
            '#comment',
            '#building',
            '#cart',
          ]}
          text='Mediaor is able to take any content and turn it into something innovative and captivating so that users are engaged in all areas of the site.  Smarter Web Solutions design worked tirelessly to create a unique layout, with essential wireframe as the foundation'
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
          <Link to='/cleanSoils' className='project__next-button'>
            <Link to='/cleanSoils' className='project__next-button--text'>
              Next Project
            </Link>
          </Link>
          <Link to='/cleanSoils' className='project__next-button-arrow'>
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
