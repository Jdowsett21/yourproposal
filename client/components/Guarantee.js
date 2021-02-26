import React from 'react';
import deployment from '../public/img/shutterstock_1162811812.jpg';

function Guarantee({ name, color1, color2 }) {
  return (
    <div className='guarantee'>
      {' '}
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Our Guarantee</h1>
      </div>
      <div className='investment__content'>
        <p className='investment__content-text'>
          Like most business purchases, there is always a level of risk and
          uncertainty in the success of a project. We want to completely remove
          that risk from you and place it on ourselves.
        </p>
        <h3 className='investment__secondary-header--1'>
          In short, if we don't do what we say we're going to do... then you
          don't pay. Sound fair?
        </h3>
      </div>
      <img src={deployment} alt='' className='img img--guarantee' />
      <div className='investment__content'>
        <h3 className='investment__content-header'>Here's how it works</h3>
        <p className='investment__content-text'>
          The entire purpose of this project is to increase the number of new
          leads your website generates. The branding is something you want to do
          but it's also required to achieve the level of success we are both
          demanding from the new site.
        </p>
        <h3 className='investment__secondary-header--1'>
          So, here is our guarantee to you:
        </h3>
        <h3
          className='investment__secondary-header'
          style={{ fontStyle: 'italic' }}
        >
          'If your new website doesn't generate a minimum of a 2% conversion
          rate (compared to your 0.5% currently) then you don't pay for the
          website'
        </h3>
        <h3 className='investment__secondary-header--1'>
          So, here is our guarantee to you:
        </h3>
      </div>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>GUARANTEE TERMS</h1>
        <p className='investment__content-text'>
          The entire purpose of this project is to increase the number of new
          leads your website generates. The branding is something you want to do
          but it's also required to achieve the level of success we are both
          demanding from the new site.
        </p>
      </div>
    </div>
  );
}

export default Guarantee;
