import React from 'react';
import Banner from '../components/Banner';
import planning from '../img/planning.jpg';
import wireframing from '../img/wireframing.jpg';
import design from '../img/design.jpg';
import coding from '../img/coding.jpg';
import deployment from '../img/deployment.jpg';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import process from '../img/processHome1.jpg';
function ProcessPage(props) {
  return (
    <div>
      <Banner img={process} text='Web Development Process' />

      <div className='process-page__intro-section'>
        <h3 className='process-page__header'>The Web Development Process</h3>
        <p className='process-page__intro-paragraph'>
          At Smarter Web Solutions we value building websites as much as we
          value building our relationship with our customers. We believe it is
          essential to really get to know our customers so that we can build a
          website that is exactly how they imaged it would be and helps their
          business as much as possible. At each step we review what we have
          accomplished to ensure that we have met your every expectation before
          moving onto the next task.
        </p>
      </div>
      <div className='process-page__section'>
        <img
          src={planning}
          alt=''
          className='process-page__image process-page__image--1'
        />
        <div className='process-page__section-text'>
          <h4 className='process-page__section-header'>Planning</h4>
          <p className='process-page__section-paragraph'>
            The first step in every well well made website is a solid project
            plan. We make sure to get lots of input from our customer as to what
            they would like to accomplished from this project. The initial scope
            can come from the client or from phone calls and zoom meetings.
            During our meetings we will ge any inspiration the client may have,
            be it a certain style or other websites that have caught their eye.
            This will set us up for building the initial blueprint
          </p>
        </div>
        <div className='process-page__section-text'>
          <h4 className='process-page__section-header'>Blueprint</h4>
          <p className='process-page__section-paragraph'>
            With the planning of the site complete we can begin building the
            wireframe of the site. This is the process of determining where and
            how all the pages and components of the site will be laid out. Our
            wireframing team will design the structure of the site. We will work
            with the customers until they are satisfied with the wireframe of
            their website.
          </p>
        </div>
        <img
          src={wireframing}
          alt=''
          className='process-page__image process-page__image--2'
        />
        <img
          src={design}
          alt=''
          className='process-page__image process-page__image--3'
        />

        <div className='process-page__section-text'>
          <h4 className='process-page__section-header'>Design</h4>
          <p className='process-page__section-paragraph'>
            Once the bluerpint of the site is complete, our design team can take
            over and bring your application to life. Incorporating the client's
            company colors and design theme, we will create an initial design of
            how the website will look. You will be presented with how your site
            will look, before any code is created. You will be able to click
            around and make any changes you desire.
          </p>
        </div>
        <div className='process-page__section-text'>
          <h4 className='process-page__section-header'>Code</h4>
          <p className='process-page__section-paragraph'>
            Now that the design of the website has been created it is time to
            build the magic that occurs behind the scenes. We use an agile
            method of web development at Smarter web solutions which involves a
            series of 'Sprints'. At the end of each sprint we will present the
            website to you to ensure that you are happy with its progress. Agile
            web development involves a thorough testing process to ensure that
            the website is running perfectly, before deployment.
          </p>
        </div>
        <img
          src={coding}
          alt=''
          className='process-page__image process-page__image--4'
        />
        <img
          src={deployment}
          alt=''
          className='process-page__image process-page__image--5'
        />

        <div className='process-page__section-text'>
          <h4 className='process-page__section-header'>Deployment</h4>
          <p className='process-page__section-paragraph'>
            Once the application is complete, it is reviewed and approved by our
            project manager and QA team and the client. Now that your website is
            complete it is time to show it to the world! There are lots of
            different options for deploying your website, from running it on a
            client side server, basic web hosting or a cloud hosted provider. We
            will counsel you on this final step and determine what is your best
            option.
          </p>
        </div>
      </div>
      <Process />
      <ContactForm />
    </div>
  );
}

export default ProcessPage;
