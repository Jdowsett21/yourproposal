import React from 'react';
import Gradient from '../common/Gradient';
function Banner({ img, text, modifier }) {
  return (
    <div className={`banner banner${modifier}`}>
      <img className='banner__img' src={img} alt='First slide' loading='lazy' />
      {/* <Gradient /> */}
      <h1 className='banner__header '>{text}</h1>
    </div>
  );
}

export default Banner;
