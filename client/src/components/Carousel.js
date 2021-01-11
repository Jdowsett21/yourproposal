import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { button } from 'react-scroll';
import peopleMeeting from '../img/peopleMeeting.jpg';
import coding from '../img/codingCloseUp.jpg';
import teamWork from '../img/teamwork.jpg';

function CarouselSection() {
  return (
    <>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={1000000}>
          <div className='carousel__container carousel__container--1'>
            <div className='carousel__inner-container'>
              <div className='carousel__header-1-background'>
                <h1 className='carousel__header-1'>
                  The Website Development Team
                </h1>
              </div>
              <div className='carousel__header-5-background'>
                <h5 className={`carousel__tag-line`}>
                  Building high quality websites for the modern business
                </h5>
              </div>
              <div className='carousel__button-container'>
                {/* smoothscroll */}
                <button className='carousel__button'>Contact Us</button>
              </div>
            </div>
          </div>
          <img
            className='fit'
            src={peopleMeeting}
            loading='lazy'
            alt='First slide'
          />
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item interval={10000000}>
          <div className='carousel__container carousel__container--2'>
            <div className=' carousel__inner-container'>
              <h3 className='carousel__header-3 carousel__header-3--2'></h3>
              <h1 className='carousel__header-1'></h1>
              <h5 className='carousel-2__tag-line'></h5>
              <div className='carousel__button-container'>
                <button
                  className='carousel__button'
                  activeClass='active'
                ></button>
              </div>
            </div>
          </div>
          <img className='fit' src={coding} loading='lazy' alt='Third slide' />
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item interval={10000}>
          <div className='carousel__container carousel__container--3'>
            <div className=' carousel__inner-container'>
              <h3 className='carousel__header-3 carousel__header-3--3'></h3>

              <h1 className='carousel__header-1'></h1>
              <h5 className='carousel__tag-line'></h5>
              <div className='carousel__button-container'>
                <button className='carousel__button'>Learn More</button>
              </div>
            </div>
          </div>

          <img
            className='fit'
            src={teamWork}
            loading='lazy'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSection;
