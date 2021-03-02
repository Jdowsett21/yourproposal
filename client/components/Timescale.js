import React from 'react';
import deployment from '../public/img/shutterstock_1681458781.jpg';
import Gradient from '../common/Gradient';

function Timescale({ name, color1, color2, modifier }) {
  return (
    <div className='timescale'>
      <div
        className={`intro__header-background intro__header-background--${modifier}`}
      >
        <Gradient color1={color1} color2={color2} />{' '}
        <h1 className={`intro__header intro__header--${modifier}`} style={{}}>
          Process & Timeline
        </h1>
        <img src={deployment} alt='' className='img img--timescale' />
      </div>
      <div
        className={`timescale__content timescale__content--${modifier}`}
        style={{ marginBottom: '10rem' }}
      >
        <h3 className='timescale__content-header'>Content for the site</h3>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5
              className='timescale__item-header timescale__item-header--1'
              style={{ borderColor: color1 }}
            >
              Step 1
            </h5>
            <h5 className='timescale__item-header timescale__item-header--2'>
              Planning
            </h5>
          </div>
          <p className='timescale__item-text'>
            We need to get to the bottom of who you are, what you stand for and
            who you stand beside. Only then can we begin to create a design that
            portrays the value you offer in a way that resonates with the people
            who matter: the people you want to do business with.
          </p>
        </div>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5
              className='timescale__item-header timescale__item-header--1'
              style={{ borderColor: color1 }}
            >
              Step 2
            </h5>
            <h5 className='timescale__item-header timescale__item-header--2'>
              Wireframe
            </h5>
          </div>
          <p className='timescale__item-text'>
            Once the we understand your vision we can begin building the
            wireframe of the site. This process involves determining the layout
            of the site. Our wireframing team will design the structure of the
            site. We will work with the you until they are satisfied with the
            wireframe of their website.
          </p>
        </div>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5
              className='timescale__item-header timescale__item-header--1'
              style={{ borderColor: color1 }}
            >
              Step 3
            </h5>
            <h5 className='timescale__item-header timescale__item-header--2'>
              Design
            </h5>
          </div>
          <p className='timescale__item-text'>
            Once the wireframe of the site is complete, our design team can take
            over and bring your application to life. Incorporating your company
            colors and design theme, we will create an initial design of their
            website. You will be presented with how their site will look, before
            any code is created. You will be able to click around and make any
            changes you desire.
          </p>
        </div>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5
              className='timescale__item-header timescale__item-header--1'
              style={{ borderColor: color1 }}
            >
              Step 4
            </h5>
            <h5 className='timescale__item-header timescale__item-header--2'>
              Code
            </h5>
          </div>
          <p className='timescale__item-text'>
            Once the design is complete, it is time to build the magic that
            occurs behind the scenes. We use an agile method of web development
            at Smarter Web Solutions which involves a series of 'Sprints'. At
            the end of each sprint we will review the website with you to ensure
            that you are happy with the progress. Agile web development involves
            a thorough testing process to ensure that the website is running
            perfectly before deployment.
          </p>
        </div>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5
              className='timescale__item-header timescale__item-header--1'
              style={{ borderColor: color1 }}
            >
              Step 5
            </h5>
            <h5 className='timescale__item-header timescale__item-header--2'>
              Deployment
            </h5>
          </div>
          <p className='timescale__item-text'>
            Once the application is complete, it is reviewed and approved by our
            project manager and quality assurance team and you of course! Now
            that the website is complete it is time to show it to the world!
            There are many different options for deploying your website which
            include: running it on a client side server, basic web hosting or a
            cloud hosted provider. We will counsel you on this final step and
            determine what is the best option.
          </p>
        </div>
      </div>
      <div
        className={`intro__header-background intro__header-background--bottom--3 intro__header-background--${modifier} intro__header-background--no`}
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className={`intro__header intro__header--${modifier}`} style={{}}>
          We will follow up with you at each checkpoint before proceeding.
        </h1>
      </div>
      <div
        className={`timescale__content timescale__content--1 timescale__content--${modifier}`}
        style={{ marginBottom: '10rem' }}
      >
        <h3 className='timescale__header'>Proposed Schedule</h3>
        <p style={{ marginBottom: '1rem' }}>
          Please note: all dates are estimated in number of days having received
          all materials necessary to begin the proposed project.
        </p>
        <div className='timescale__thick-border'></div>
        <div className='timescale__table-header'>
          <h3
            className='timescale__row-1'
            style={{ color: color1, fontWeight: 500 }}
          >
            Deliverable
          </h3>
          <h3
            className='timescale__row-2'
            style={{ color: color1, fontWeight: 500 }}
          >
            Number Of Days
          </h3>
          <h3
            className='timescale__row-3'
            style={{ color: color1, fontWeight: 500 }}
          >
            Process
          </h3>
        </div>
        <div className='timescale__row-item'>
          <h3 className='timescale__row-1'>Planning</h3>
          <h3 className='timescale__row-2'>5 Days</h3>
          <h3 className='timescale__row-3'>Brainstorming Initial Structure</h3>
        </div>
        <div className='timescale__row-item'>
          <h3 className='timescale__row-1'>Wireframe</h3>
          <h3 className='timescale__row-2'>9 days</h3>
          <h3 className='timescale__row-3'>Blueprint Of Site Designed</h3>
        </div>
        <div className='timescale__row-item'>
          <h3 className='timescale__row-1'>Design</h3>
          <h3 className='timescale__row-2'>16 days</h3>
          <h3 className='timescale__row-3'>Website Design Complete</h3>
        </div>
        <div className='timescale__row-item'>
          <h3 className='timescale__row-1'>Code</h3>
          <h3 className='timescale__row-2'>23 days</h3>
          <h3 className='timescale__row-3'>Final Code Is Compiled</h3>
        </div>
        <div className='timescale__row-item'>
          <h3 className='timescale__row-1'>Website Review</h3>
          <h3 className='timescale__row-2'>30 Days</h3>
          <h3 className='timescale__row-3'>Quality Assurance Review</h3>
        </div>
        <div className='timescale__thick-border'></div>
      </div>
    </div>
  );
}

export default Timescale;
