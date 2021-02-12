import React from 'react';
import peopleMeeting from '../img/Web Design.jpg';
import peopleMeetingSmall from '../img/Web Design Small.jpg';
import peopleMeetingwebSmall from '../img/Web Design Small.webp';
import peopleMeetingweb from '../img/Web Design.webp';
import coding from '../img/codingCloseUp.jpg';
import codingSmall from '../img/codingCloseUpSmall.jpg';
import codingwebSmall from '../img/codingCloseUpSmall.webp';
import codingweb from '../img/codingCloseUp.webp';
import teamWork from '../img/teamwork.jpg';
import teamWorkSmall from '../img/teamworkSmall.jpg';
import teamWorkweb from '../img/teamwork.webp';
import teamWorkwebSmall from '../img/teamworkSmall.webp';
import { Link } from 'react-router-dom';

const { Carousel } = require('react');

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
          <picture className='fit'>
            <source
              srcSet={`${peopleMeetingwebSmall} 600w, ${peopleMeetingweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${peopleMeeting} 600w, ${peopleMeetingSmall}`}
              type='image/jpeg'
            />
            <img
              src={peopleMeeting}
              alt='First slide'
              className='fit'
              loading='lazy'
            />
          </picture>
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
          <picture className='fit'>
            <source
              srcSet={`${codingwebSmall} 600w, ${codingweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${coding} 600w, ${codingSmall}`}
              type='image/jpeg'
            />
            <img
              src={coding}
              alt='First slide'
              className='fit'
              loading='lazy'
            />
          </picture>
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
          <picture className='fit'>
            <source
              srcSet={`${teamWorkwebSmall} 600w, ${teamWorkweb}`}
              type='image/webp'
            />
            <source
              srcSet={`${teamWork} 600w, ${teamWorkSmall}`}
              type='image/jpeg'
            />
            <img
              src={teamWork}
              alt='First slide'
              className='fit'
              loading='lazy'
              alt='Third slide'
            />
          </picture>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSection;
