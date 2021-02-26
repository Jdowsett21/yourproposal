import React, { useState } from 'react';
import deployment from '../public/img/shutterstock_760733977.jpg';
import sprite from '../public/img/svg/sprite.svg';
function Investment({ name, color1, color2 }) {
  const [button, setButton] = useState(false);
  return (
    <div className='investment'>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Your Investment</h1>
      </div>

      <div className='investment__content'>
        <h2 className='investment__content-header'>Strategy</h2>
        <p className='investment__content-text'>
          Our pricing is set in a way that it won't actually cost you anything.
          Our guarantee makes sure that if it doesn't work then you don't pay.
          Yes, really.
        </p>
        <h3 className='investment__secondary-header'>
          Our strategy for this is two-fold:
        </h3>
        <p className='investment__content-text'>
          1. We don't take on every client. We've become very good at assessing
          whether we can help companies and we are very excited about helping
          you.
        </p>
        <p className='investment__content-text'>
          <p className='investment__content-text'>
            2. We grab the low hanging fruit available first. This fund pays
            back your investment as quickly as possible.
          </p>
        </p>
      </div>
      <img
        src={deployment}
        alt=''
        className='img'
        style={{ transform: 'translateY(-3rem)' }}
      />
      <div className='investment__content investment__content--1'>
        <h3 className='investment__content-header'>The Cost</h3>
        <p className='investment__content-text'>
          Below you can find the one-off cost of our web design services. Fifty
          percent is paid upon signing of your proposal and allows us to get
          straight on with developing your website (in-line with aspects
          outlined in the Process and Timelines page) and getting your business
          the boost you are looking for.
        </p>

        <div className='investment__table'>
          <div className='investment__table-row'>
            <div className='investment__table-text-section'>
              <h5 className='investment__table-header'>WEBSITE DESIGN</h5>
              <p className='investment__table-text'>
                Design and development of your new website
              </p>
            </div>
            <p className='investment__table-price'>$2,995</p>
          </div>
          <div className='investment__table-row'>
            <div className='investment__table-text-section'>
              <h5 className='investment__table-header'>HOSTING</h5>
              <p className='investment__table-text'>
                Email for your entire company and hosting for your new website
              </p>
            </div>
            <p className='investment__table-price'>$45 /month</p>
          </div>
          <div className='investment__table-row'>
            <div className='investment__table-text-section'>
              <h5 className='investment__table-header'>TRAFFIC REPORT</h5>

              <button
                className='investment__optional-button'
                style={{ backgroundColor: button ? '#4DCF83' : '#BEC3C5' }}
              >
                {button ? 'SELECTED' : 'OPTIONAL'}
              </button>
              <p className='investment__table-text'>
                Detailed traffic report to show visitors, bounce rates and most
                viewed pages
              </p>
            </div>
            <div className='investment__price-section'>
              <p className='investment__table-price--1'>$12 /month</p>
              <div
                className='investment__add-button'
                onClick={() => setButton(!button)}
                style={{
                  backgroundColor: button ? '#4DCF83' : '#BEC3C5',
                  border: button ? '1px solid  #4DCF83' : '2px solid #e9e8eb',
                }}
              >
                {button ? (
                  <svg className='investment__table-icon'>
                    <use href={sprite + '#check'}></use>
                  </svg>
                ) : (
                  <svg className='investment__table-icon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className='investment__table-total'>
            <h3 className='investment__total-text'>One-off Total $2,995</h3>
            <h3 className='investment__total-text'>
              Monthly Total {button ? '$57/month' : '$45/month'}
            </h3>
          </div>
        </div>
      </div>
      <div className='investment__content'>
        <h2 className='investment__content-header'>
          The Real Cost = £200,000...Profit!
        </h2>
        <p className='investment__content-text'>
          There's the amount of money changing hands during this transaction and
          then there's, what we call, "The Real Cost".
        </p>
        <p className='investment__content-text'>
          This is the cost of our service, factored into the cost of you doing
          business, then working out what's left. During our initial
          conversation, we asked you what the average transaction value was and
          the rough amount of profit in each job.
        </p>
      </div>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>
          Using that as a starting point, this is the real cost:
        </h1>
        <div className='investment__content investment__content--2'>
          <p className='investment__content-text'>
            You're currently getting 5 leads each month from the website and
            based on that traffic is about 0.5% conversion rate. You're also
            converting 1 in 5 leads into clients.
          </p>
          <p className='investment__content-text'>
            Our guarantee states that we'll get it to 2% which will be 20 leads
            each month.
          </p>
          <p className='investment__content-text'>
            Your average deal is worth £6,000 p/a which with your new monthly
            lead count and assuming your conversion rate stays the same is 4 new
            clients each month at a £18,000 p/a increase.
          </p>
          <p className='investment__content-text'>
            With this laid out, it's clear that by month 2, your investment will
            be paid back by way of annual recurring revenue.
          </p>

          <p className='investment__content-text'>
            By the end of Year 1, you'll have brought in £202,000 of recurring
            revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Investment;
