import React from 'react';
import deployment from '../public/img/shutterstock_1022439985.jpg';
import deployment1 from '../public/img/shutterstock_763880317.jpg';
import Gradient from '../common/Gradient';

function Paid({ name, color1, color2, modifier, noWebsite }) {
  return (
    <div className='paid'>
      <div
        className={`intro__header-background intro__header-background--${modifier}`}
      >
        <Gradient color1={color1} color2={color2} />

        <h1 className={`intro__header intro__header--${modifier}`} style={{}}>
          Case Study | ABC Legal Company
        </h1>
        <img src={deployment} alt='' className='img img--paid' />
      </div>
      <div className={`paid__content paid__content--${modifier}`}>
        <div className='paid__content-item'>
          <div className='paid__item-header-section'>
            <h5 className='paid__item-header' style={{ borderColor: color1 }}>
              Goals
            </h5>
          </div>

          <p className='paid__item-text'>
            ABC Legal Company needed a new website. They'd been around for over
            20 years and operated with the same marketing material they started
            with. The only new business enquiries were from referrals. They had
            {noWebsite
              ? 'no website and were missing out on a huge demographic and lots of new clients'
              : `a website but it hadn't been touched in over 10 years.`}
          </p>
        </div>
        <div className='paid__content-item'>
          <div className='paid__item-header-section'>
            <h5 className='paid__item-header' style={{ borderColor: color1 }}>
              Proposal Solution
            </h5>
          </div>

          <p className='paid__item-text'>
            Create a new website with an emphasis put on bringing in new leads.
            Build marketing funnels allowing leads to easily connect with ABC
            Legal Company.
          </p>
        </div>
        <div className='paid__content-item'>
          <div className='paid__item-header-section'>
            <h5 className='paid__item-header' style={{ borderColor: color1 }}>
              Result
            </h5>
          </div>

          <p className='paid__item-text'>
            After 8 weeks of launching the new site, they'd gone from{' '}
            {noWebsite
              ? 'no website leads'
              : '1 new lead a week from the website'}{' '}
            to an average of 9 each week. On average, they were converting 1 in
            5 enquiries.{' '}
            {noWebsite
              ? 'Now they were bringing in 1 new client every 4 days, taking advantage of the online market'
              : `At this current rate that means instead of bringing on
            1 new client every 5 weeks, they're bringing in 1 new client every 4
            days.`}
          </p>
        </div>
      </div>
      <div
        className={`intro__header-background intro__header-background--${modifier} intro__header-background--bottom--2  `}
      >
        <Gradient color1={color1} color2={color2} />
        <img src={deployment1} alt='' className='img img--paid-2 img--bottom' />
      </div>
    </div>
  );
}

export default Paid;
