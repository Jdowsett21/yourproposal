import React, { useState, useEffect } from 'react';
import moneytrackerImage3 from '../img/svg/grivetyimage3-min.png';
import moneytrackerImage2 from '../img/svg/grivetyImage2-min.png';
import moneytrackerImage4 from '../img/svg/grivetyImage4.svg';
import moneytrackerImage5 from '../img/svg/grivetyImage5-min.png';
import moneytrackerImage6 from '../img/svg/grivetyImage6-min.png';

import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GrivetyCarousel(props) {
  return (
    <>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={2000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage4}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage2}
            loading='lazy'
            alt='First slide'
          />
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item interval={2000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage3}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item interval={200000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage5}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item interval={200000}>
          <img
            className='fit fit--grivety'
            src={moneytrackerImage6}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default GrivetyCarousel;
