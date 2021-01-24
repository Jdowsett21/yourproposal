import React from 'react';
import Gradient from '../common/Gradient';
function Banner({ img, text }) {
  return (
    <div className='banner'>
      <img className='banner__img' src={img} alt='First slide' />
      <Gradient />
      <h1 className='banner__header '>{text}</h1>
    </div>
  );
}

export default Banner;
