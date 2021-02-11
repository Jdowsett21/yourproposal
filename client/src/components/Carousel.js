import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { button } from 'react-scroll';
import peopleMeeting from '../img/Web Design.jpg';
import coding from '../img/codingCloseUp.jpg';
import teamWork from '../img/teamwork.jpg';
import { Link } from 'react-router-dom';

function CarouselSection() {
  return (
    <>
      <Carousel>
        {/* slide 1 */}
        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--1'>
            <div className='carousel__inner-container'>
              <div className='carousel__header-1-background'>
                <h1 className='carousel__header-1'>Web Design Experts</h1>
              </div>
              <div className='carousel__header-5-background'>
                <h5 className={`carousel__header-5`}>
                  Building high quality websites for the modern business
                </h5>
              </div>
              <div className='carousel__button-container'>
                <button to='/contact' className='carousel__button'>
                  <Link to='/contact' className='carousel__button--text'>
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <img
            className='fit'
            src={peopleMeeting}
            loading='lazy'
            alt='Web Design'
          />
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--2'>
            <div className=' carousel__inner-container'>
              <div className='carousel__header-1-background carousel__header-1-background--1'>
                <h1 className='carousel__header-1'>Endless Possibilities</h1>
              </div>
              <div className='carousel__header-5-background carousel__header-5-background--1'>
                <h5 className={`carousel__header-5`}>
                  Discover all of our services for your business needs
                </h5>
              </div>
              <div className='carousel__button-container'>
                <button to='/services' className='carousel__button'>
                  <Link to='services' className='carousel__button--text'>
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <img
            className='fit'
            src={coding}
            loading='lazy'
            alt='Web Development'
          />
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item interval={8000}>
          <div className='carousel__container carousel__container--3'>
            <div className=' carousel__inner-container'>
              <div className='carousel__header-1-background carousel__header-1-background--2'>
                <h1 className='carousel__header-1'>Check Out Our Work</h1>
              </div>
              <div className='carousel__header-5-background carousel__header-5-background--2'>
                <h5 className='carousel__header-5 carousel__header-5--2'>
                  Take a look at how we've helped other businesses build their
                  dream
                </h5>
              </div>

              <div className='carousel__button-container'>
                <button className='carousel__button'>
                  <Link to='/portfolio' className='carousel__button--text'>
                    Learn More
                  </Link>
                </button>
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
