import React, { useState } from 'react';
import deployment from '../public/img/shutterstock_745967341.jpg';
import sprite from '../public/img/svg/sprite.svg';
import moment from 'moment';
import ContactForm from './ContactForm';
import Signature from './Signature';
function Proposal({
  name,
  color1,
  color2,
  signed,
  ipAddress,
  dateSigned,
  signatureText,
  signatureImage,
}) {
  const [inputType, setType] = useState(true);
  const data = signatureImage;
  return (
    <div className='guarantee'>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Approve Proposal</h1>
      </div>
      <img src={deployment} alt='' className='img img--proposal' />
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
      {signed ? (
        <div className='signed'>
          <p className='signed__text'>
            I, {signatureText} agree to the terms of this agreement and I agree
            that my typed name below can be used as a digital representation of
            my signature to that fact.
          </p>
          <img src={data} alt='' className='signed__signature' />
          <p className='signed__signature-text'>{signatureText}</p>
          <p className='signed__label-line'>SIGNED BY</p>
          <p className='signed__item-line'>{signatureText}</p>
          <p className='signed__label-line'>SIGNED ON</p>
          <p className='signed__item-line'>
            Date Signed: {moment(dateSigned).format('DD-MMM-YYYY')}
          </p>
          <p className='signed__item-line'>
            Time Signed: {moment(dateSigned).format('LT')}
          </p>
          <p className='signed__label-line'>
            IP ADDRESS FROM SIGNATURE LOCATION
          </p>
          <p className='signed__item-line'>{ipAddress}</p>
        </div>
      ) : (
        <div className='intro__header-background intro__header-background--1'>
          <h1 className='intro__header' style={{ color: color1 }}>
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
                <div className='signing-box__inputType-input'>
                  <ContactForm name={name} />
                </div>
              ) : (
                <Signature name={name} signed={signed} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Proposal;
