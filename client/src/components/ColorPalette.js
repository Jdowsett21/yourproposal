import React from 'react';
import { useInView } from 'react-intersection-observer';
import ColorNumber from './ColorNumber';

function ColorPalette(props) {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <>
      <h4 className='project__section-header'>Colour Palette</h4>
      <div className='project__design-specifics'>
        <div className='project__color-shapes'>
          <div
            className='project__color-item project__color-item--1 '
            style={{ backgroundColor: '#25a7f4' }}
          >
            <ColorNumber color='#25a7f4' />
          </div>
          <div
            className='project__color-item project__color-item--2 '
            style={{ backgroundColor: '#77b609' }}
          >
            <ColorNumber color='#77b609' />
          </div>
          <div
            className='project__color-item project__color-item--3 '
            style={{ backgroundColor: '#264977' }}
          >
            <ColorNumber color='#264977' />
          </div>
          <p
            className={
              inView
                ? 'project__explanation project__explanation--visible'
                : 'project__explanation'
            }
            ref={ref}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium enim officia, quisquam, pariatur perspiciatis nesciunt
            tenetur iure soluta illo numquam, corrupti reiciendis. Doloribus,
            eum eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ipsum ipsa tempore labore, consectetur expedita voluptas recusandae
            vero id nemo itaque aliquid, eveniet dicta excepturi mollitia!
          </p>
        </div>
      </div>
    </>
  );
}

export default ColorPalette;
