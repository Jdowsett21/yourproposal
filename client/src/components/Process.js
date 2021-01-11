import React from 'react';
import sprite from '../img/sprite.svg';
function Process(props) {
  return (
    <div className='process'>
      <h2 className='process__header'>Our Process</h2>
      <div className='process-grid'>
        <h3 className='process__step process_step'>Planning</h3>
        <div className='process__section'>
          <svg className='process__icon process__icon__1'>
            <use href={`${sprite}#planning`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--2  '>WireFraming</h3>
        <div className='process__section'>
          <div className='process__line-border'></div>
          <svg className='process__icon'>
            <use href={`${sprite}#wireframe`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--3 '>Design</h3>
        <div className='process__section'>
          <div className='process__line-border'></div>
          <svg className='process__icon'>
            <use href={`${sprite}#web-design`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--4 '>Code</h3>
        <div className='process__section'>
          <div className='process__line-border'></div>
          <svg className='process__icon'>
            <use href={`${sprite}#web-programming`}></use>
          </svg>
        </div>
        <h3 className='process__step process__step--5 '>Deployment</h3>
        <div className='process__section'>
          <div className='process__line-border'></div>
          <svg className='process__icon'>
            <use href={`${sprite}#file-upload`}></use>
          </svg>
        </div>
        <h2 className='process__secondary-header'>
          Every single website that is created by Smarter Web Solution goes
          through the same 5 step process to ensure that the customer is
          involved every step of the way.
        </h2>
      </div>
    </div>
  );
}

export default Process;
