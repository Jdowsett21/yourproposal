import React from 'react';
import introImage from '../public/img/shutterstock_515369740.jpg';
import deployment from '../public/img/shutterstock_362358830.jpg';
function Intro({ name, color1, color2 }) {
  return (
    <div className='intro'>
      {name !== '' && (
        <div
          className='intro__header-background'
          style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
        >
          <h1 className='intro__header' style={{}}>
            {name} is looking to increase its online leads with a NEW website
          </h1>
        </div>
      )}
      <img src={deployment} alt='' className='img' />
      <div className='intro__text'>
        <h2 className='intro__text--header'>Introduction</h2>
        <div className='h3 intro__text--secondary'>
          The objective is to increase the number of new leads through the
          website. We'll do this by doing two things:
        </div>
        <p className='intro__text--main'>
          Firstly, figure out the real value you provide beyond the mechanics
          like 'tax advice' and create some consistent messaging to use
          throughout your entire brand that speaks to your audience.
        </p>
        <p className='intro__text--main'>
          Secondly, employ modern lead-generation tactics. Our goal is to
          increase your conversion rates by at least 50%.
        </p>
        <p className='intro__text--main'>
          We have explained more about how we plan to achieve this in the next
          pages.
        </p>
        <p className='intro__text--bold'>
          Please read through the information carefully and, if satisfied, you
          can use our 'E-Sign' system right here in your proposal to accept and
          get started!
        </p>
      </div>
      <img src={introImage} alt='d' className='img img-bottom' />
    </div>
  );
}

export default Intro;
