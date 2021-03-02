import React from 'react';
import moment from 'moment';
function ProposalSigned({
  name,
  color1,
  color2,
  signed,
  ipAddress,
  dateSigned,
  signatureText,

  signatureImage,
}) {
  const data = signatureImage;

  return (
    <div className='signed'>
      <p className='signed__text'>
        I, {signatureText} agree to the terms of this agreement and I agree that
        my typed name below can be used as a digital representation of my
        signature to that fact
      </p>
      {signatureImage !== '' && (
        <img src={data} alt='' className='signed__signature' />
      )}
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
      <p className='signed__label-line'>IP ADDRESS FROM SIGNATURE LOCATION</p>
      <p className='signed__item-line'>{ipAddress}</p>
    </div>
  );
}

export default ProposalSigned;
