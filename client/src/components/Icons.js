import React from 'react';
import CleanSoilsSprite from '../img/svg/CleanSoilsSprite.svg';
import { useInView } from 'react-intersection-observer';
import IconInfo from './IconInfo';

function Icons(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      <h3
        className={
          inView
            ? 'project__section-header project__section-header--visible'
            : 'project__section-header project__section-header--animation'
        }
      >
        Icons
      </h3>
      <div
        ref={ref}
        className={
          inView
            ? 'project__icon-section project__icon-section--visible'
            : 'project__icon-section'
        }
      >
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#construction'}></use>
          </svg>
        </div>
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#icon-utilities'}></use>
          </svg>
        </div>
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#icon-municipal'}></use>
          </svg>
        </div>
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#icon-tree'}></use>
          </svg>
        </div>
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#soil'}></use>
          </svg>
        </div>
        <div className='project__icon-background'>
          {' '}
          <svg className='project__project-icon'>
            <use href={CleanSoilsSprite + '#drop'}></use>
          </svg>
        </div>
      </div>
      <IconInfo />
    </>
  );
}

export default Icons;
