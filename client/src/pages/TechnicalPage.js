import React from 'react';
import Banner from '../components/Banner';
import technical from '../img/codingCloseUp.jpg';
import sprite from '../img/svg/sprite.svg';

function TechnicalPage(props) {
  return (
    <>
      <Banner img={technical} text='Technical' />
      <div className='technical'>
        <h3 className='technical__header'>Technical Aptitude</h3>
        <p className='technical__secondary-header'>
          We have technical expertise in many aspects of web development. Check
          out our skills below!
        </p>

        <div className='technical__group'>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#js-1'}></use>
            </svg>
            <h4 className='technical__item-header'>Javascript</h4>
            <p className='technical__item-paragraph'>
              A workhorse and flexible language that creates a rich user
              experience. Javascript is used for many web based applications.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#node'}></use>
            </svg>
            <h4 className='technical__item-header'>Node JS</h4>
            <p className='technical__item-paragraph'>
              Node Js is an open source Javscript runtime environement, that
              executes server side code. It is extremely efficient and
              eliminates the bottleneck other server side languages create.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#css-3'}></use>
            </svg>
            <h4 className='technical__item-header'>CSS</h4>
            <p className='technical__item-paragraph'>
              CSS is the engine behind the design of any great website. With new
              features coming out often, CSS 3 is the face of any modern website
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#html'}></use>
            </svg>
            <h4 className='technical__item-header'>HTML</h4>
            <p className='technical__item-paragraph'>
              The backbone of any website is HTML. It is the structure and
              essential elements of the website layout and design. Every website
              relies on html as its foundation.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#react'}></use>
            </svg>
            <h4 className='technical__item-header'>React</h4>
            <p className='technical__item-paragraph'>
              React is a powerful javascript library used for building efficient
              and elegant user interfaces. React makes web design extremely fun
              and exciting.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#redux'}></use>
            </svg>
            <h4 className='technical__item-header'>Redux</h4>
            <p className='technical__item-paragraph'>
              Redux is a javascript library used for managing data and
              information in the user interface. Redux is essential for any
              complex website that needs to be updated dynamically.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon technical__icon--mongo'>
              <use href={sprite + '#mongodb'}></use>
            </svg>
            <h4 className='technical__item-header'>MongoDB</h4>
            <p className='technical__item-paragraph'>
              MongoDB is a database that is used to flexibly stored data sent
              from your website. MongoDB is a very powerful tool that allows
              websites to save and display data in a myriad of ways.
            </p>
          </div>
          <div className='technical__item'>
            <svg className='technical__icon'>
              <use href={sprite + '#sass'}></use>
            </svg>
            <h4 className='technical__item-header'>Sass</h4>
            <p
              className='technical__item-paragraph'
              style={{ paddingBottom: '3.1rem' }}
            >
              Sass is a CSS pre-compiler that allows us to easily build highly
              designed website in an efficient manner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalPage;
