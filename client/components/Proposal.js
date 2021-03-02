import React, { useState } from 'react';
import deployment from '../public/img/shutterstock_745967341.jpg';
import sprite from '../public/img/svg/sprite.svg';

import ContactForm from './ContactForm';
import Signature from './Signature';
import Gradient from '../common/Gradient';
function Proposal({
  name,
  color1,
  color2,
  signed,

  modifier,
}) {
  const [inputType, setType] = useState(true);

  return (
    <div className='guarantee'>
      <div
        className={`intro__header-background intro__header-background--${modifier}`}
      >
        <Gradient color1={color1} color2={color2} />
        <h1 className='intro__header '>Approve Proposal</h1>
        <img src={deployment} alt='' className='img img--proposal' />
      </div>
      <div className='investment__content'>
        <h3 className='investment__secondary-header'>
          If you would like to join us and become a client then we'd be
          delighted to have you.
        </h3>
        <h3 className='investment__content-header'>Next steps</h3>
        <p className='investment__content-text'>
          1. Sign below by typing your name and hitting 'Sign Proposal'
        </p>
        <p className='investment__content-text'>
          2. We'll arrange the initial interview where we'll gather all the
          details we need.
        </p>
        <p className='investment__content-text'>
          3. We'll be in touch with your invoice details and will set up billing
        </p>
      </div>

      <div className='' style={{ display: 'grid', justifyItems: 'center' }}>
        <h1
          className='intro__header intro__header--2'
          style={{ color: color1 }}
        >
          We're ready to go, are you...?
        </h1>
        <div className='signing-box'>
          <p className='signing-box__info'>
            I, first name surname, agree to the terms of this agreement and I
            agree that my typed name below can be used as a digital
            representation of my signature to that fact.
          </p>
          <div
            className='signing-box__top-box'
            style={{
              borderBottom: inputType ? 'none' : '1px solid #d1d1d1',
              cursor: 'pointer',
            }}
            onClick={() => setType(true)}
          >
            <svg className='signing-box__top-box--icon '>
              <use href={sprite + '#type'}></use>
            </svg>
            <p className='signing-box__top-box--text'>Type</p>
          </div>
          <div
            className='signing-box__top-box signing-box__top-box--1'
            style={{
              borderBottom: inputType ? '1px solid #d1d1d1' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => setType(false)}
          >
            <svg className='signing-box__top-box--icon signing-box__top-box--icon--1'>
              <use href={sprite + '#sign'}></use>
            </svg>
            <p className='signing-box__top-box--text'>Sign</p>
          </div>
          <div className='signing-box__signing'>
            <h3 className='signing-box__header'>
              TO ACCEPT, {inputType ? 'TYPE' : 'SIGN'} YOUR FULL NAME BELOW
            </h3>

            {inputType ? (
              <div className='signing-box__type-input'>
                <ContactForm name={name} />
              </div>
            ) : (
              <Signature name={name} signed={signed} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
