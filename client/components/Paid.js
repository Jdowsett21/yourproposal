import React from 'react';
import deployment from '../public/img/shutterstock_1022439985.jpg';
import deployment1 from '../public/img/shutterstock_763880317.jpg';

function Paid({ name, color1, color2 }) {
  return (
    <div className='paid'>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Case Study | ABC Legal Company</h1>
      </div>
      <img src={deployment} alt='' className='img img--paid' />
      <div className='paid__content'>
        <div className='paid__content-item'>
          <h5 className='paid__item-header'>Goals</h5>

          <p className='paid__item-text'>
            ABC Legal Company needed a re-brand and a new website. They'd been
            around for over 20 years and operated with the same marketing
            material they started with. The only new business enquiries were
            from referrals. They had a website but it hadn't been touched in
            over 10 years.
          </p>
        </div>
        <div className='paid__content-item'>
          <h5 className='paid__item-header'>Proposal Solution</h5>

          <p className='paid__item-text'>
            Re-brand the company. Same name, but new logo and colour scheme
            along with a new website with an emphasis put on bringing in new
            leads.
          </p>
        </div>
        <div className='paid__content-item'>
          <h5 className='paid__item-header'>Result</h5>

          <p className='paid__item-text'>
            After 8 weeks of launching the new site, they'd gone from 1 new lead
            a week from the website to an average of 9 each week. On average,
            they were converting 1 in 5 enquiries. At this current rate that
            means instead of bringing on 1 new client every 5 weeks, they're
            bringing in 1 new client every 4 days. ABC Legal Companies' Managing
            Partner had this to say:
          </p>
        </div>
      </div>
      <img src={deployment1} alt='' className='img img--paid-2' />
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>
          "The new website has surpassed all my expectations and paid for itself
          in the first few weeks alone. This is incredibly exciting" Margeret
          Smith - Managing Partner
        </h1>
      </div>
    </div>
  );
}

export default Paid;
