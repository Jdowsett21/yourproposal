import React from 'react';
import { Link } from 'react-router-dom';
import grivetyLogo from '../img/grivety.png';
import moneytrackerImage from '../img/svg/cleanSoilsFan.svg';

function GrivetyPage(props) {
  return (
    <div className='project'>
      <img
        className='project__company-logo'
        src={grivetyLogo}
        alt='grivety logo'
      />
      <p className='project__description'>
        Grivety is a modern banking web application that displays the power of
        using a database in unison with your web server. Grivety displays data
        in every imaginable... Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quae, ullam ab? Esse possimus perspiciatis sunt
        provident ad, accusantium voluptatibus quisquam.
      </p>

      <img
        src={moneytrackerImage}
        alt='grivety Screenshot'
        className='project__image project__image--grivety'
      />
      <h2 className='project__large-header'>
        Style<span className='project__large-header'>Zone</span>
      </h2>
      <h4 className='project__design-secondary-header'>Colour Palette</h4>
      <div className='project__design-specifics'>
        <div className='project__color-shapes'></div>
        <p className='project__design-explanation'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          enim officia, quisquam, pariatur perspiciatis nesciunt tenetur iure
          soluta illo numquam, corrupti reiciendis. Doloribus, eum eaque?
        </p>
      </div>
      <h4 className='projects__section-header'>Typeface</h4>
      <div className='projects__font-heading'>
        <h2 className='projects__font-example'>Ab Bb</h2>
        <h4 className='projects__font-description'>Heading</h4>
      </div>
      <div className='projects__font-heading'>
        <h2 className='projects__font-example projects__font-example--2'>
          Aa Bb
        </h2>
        <h4 className='projects__font-description'>Sub-Heading</h4>
      </div>
      <h3 className='projects__section-header'>Icons</h3>

      <h2 className='projects__large-header'>
        Final<span className='projects__large-header'>Product</span>
      </h2>
      <div className='project__final-image-section'></div>
      <h4 className='projects__deliverables-header'>Deliverables</h4>
      <div className='projects__deliverables projects__deliverables--1'>
        <svg className='projects__deliverable-icon'>
          <use></use>
        </svg>
        <h4 className='projects__deliverables--title'>Admin Panel</h4>
        <p className='projects__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
        projects__deliverables
      </div>
      <div className='projects__deliverables projects__deliverables--2'>
        <svg className='projects__deliverable-icon'>
          <use></use>
        </svg>
        <h4 className='projects__deliverables--title'>Admin Panel</h4>
        <p className='projects__deliverables--description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          deleniti!
        </p>
      </div>
      <div className='projects__contact-us'>
        <Contact />
      </div>
      <Link to='/contact' className='projects__next-button'>
        Next Project
      </Link>
    </div>
  );
}

export default GrivetyPage;
