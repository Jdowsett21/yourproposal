import React from 'react';
import deployment from '../public/img/shutterstock_1681458781.jpg';

function Timescale({ name, color1, color2 }) {
  return (
    <div className='timescale'>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Process & Timescales</h1>
      </div>
      <img src={deployment} alt='' className='img img--timescale' />
      <div className='timescale__content'>
        <h3 className='timescale__content-header'>Content for the site</h3>
        <div className='timescale__content-item'>
          <div className='timescale__header-section'>
            <h5 className='timescale__item-header timescale__item-header--1'>
              Step 1
            </h5>
            <h5 className='timescale__item-header'>Planning</h5>
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
            <h5 className='timescale__item-header timescale__item-header--1'>
              Step 2
            </h5>
            <h5 className='timescale__item-header'>Wireframe</h5>
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
            <h5 className='timescale__item-header timescale__item-header--1'>
              Step 3
            </h5>
            <h5 className='timescale__item-header'>Design</h5>
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
            <h5 className='timescale__item-header timescale__item-header--1'>
              Step 4
            </h5>
            <h5 className='timescale__item-header'>Code</h5>
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
            <h5 className='timescale__item-header timescale__item-header--1'>
              Step 5
            </h5>
            <h5 className='timescale__item-header'>Deployment</h5>
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
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>
          In total, it will take us between 3 - 6 weeks to get your website
          live.
        </h1>
      </div>
    </div>
  );
}

export default Timescale;
