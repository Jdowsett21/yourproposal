import React from 'react';
import introImage from '../public/img/shutterstock_515369740.jpg';
import deployment from '../public/img/shutterstock_362358830.jpg';
import Gradient from '../common/Gradient';
function Intro({ name, color1, color2, modifier, noWebsite }) {
  return (
    <div className='intro'>
      {name !== '' && (
        <div
          className={`intro__header-background intro__header-background--${modifier}`}
        >
          <Gradient color1={color1} color2={color2} />
          <h1 className={`intro__header intro__header--${modifier}`} style={{}}>
            {name} Proposal
          </h1>
          <img src={deployment} alt='' className='img' />
        </div>
      )}
      <div className={`intro__text intro__text--${modifier}`}>
        <h2 className='intro__text--header'>Introduction</h2>
        <div className='h3 intro__text--secondary'>
          The objective is to increase the number of new leads through the
          website. We'll do this by doing two things:
        </div>
        <div className='intro__text--main-section'>
          <div className='indent' style={{ backgroundColor: color1 }}></div>
          <p className='intro__text--main'>
            Firstly, figure out the real value you provide beyond the mechanics
            like 'legal advice' and create some consistent messaging to use
            throughout your entire brand that speaks to your audience.
          </p>
        </div>
        <div className='intro__text--main-section'>
          <div className='indent' style={{ backgroundColor: color1 }}></div>
          <p className='intro__text--main'>
            Secondly, employ modern lead-generation tactics.{' '}
            {noWebsite
              ? 'Our goal is to create a website focused on conversion of your customers'
              : 'Our goal is to increase your conversion rates by at least 100%.'}
          </p>
        </div>
        <div className='intro__text--main-section'>
          <div className='indent' style={{ backgroundColor: color1 }}></div>
          <p className='intro__text--main'>
            We have explained more about how we plan to achieve this in the next
            pages.
          </p>
        </div>
        <p className='intro__text--bold'>
          Please read through the information carefully and, if satisfied, you
          can use our 'E-Sign' system right here in your proposal to accept and
          get started!
        </p>
      </div>
      <img src={introImage} alt='d' className='img img--bottom--1' />
    </div>
  );
}

export default Intro;
