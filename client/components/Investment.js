import React, { useState } from 'react';
import deployment from '../public/img/shutterstock_760733977.jpg';
import deployment1 from '../public/img/shutterstock_1719469636.jpg';
import sprite from '../public/img/svg/sprite.svg';
import Gradient from '../common/Gradient';
import { connect } from 'react-redux';
import { setAnalyze } from '../actions/VariableActions';
function Investment({
  name,
  color1,
  color2,
  modifier,
  setAnalyze,
  company: {
    analyze,
    averageSalePrice,
    conversionRate,
    numberOfLeads,
    conversionOfLeads,
    option,
    noWebsite,
  },
}) {
  return (
    <div className='investment'>
      <div className={`intro__header-background `}>
        <Gradient color1={color1} color2={color2} />

        <h1 className={`intro__header intro__header--${modifier}`}>
          Your Investment
        </h1>
        <img src={deployment1} alt='' className='img img--investment' />
      </div>

      <div
        className={`investment__content investment__content--3 investment__content--${modifier}`}
      >
        <div className='investment__content-header-section'>
          <h2
            className='investment__content-header investment__content-header--1'
            style={{ borderColor: color1 }}
          >
            Strategy
          </h2>
        </div>
        <p className='investment__content-text'>
          Our pricing is set in a way that it won't actually cost you anything.
          This website is an investment in your business and will increase your
          customer base.
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
        className='img img--investment-1'
        style={{ transform: 'translateY(0rem)' }}
      />
      <div
        className={`investment__content  investment__content--1--${modifier} `}
      >
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
                style={{ backgroundColor: analyze ? '#4DCF83' : '#BEC3C5' }}
              >
                {analyze ? 'SELECTED' : 'OPTIONAL'}
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
                onClick={() => setAnalyze(name)}
                style={{
                  backgroundColor: analyze ? '#4DCF83' : '#BEC3C5',
                  border: analyze ? '1px solid  #4DCF83' : '2px solid #e9e8eb',
                }}
              >
                {analyze ? (
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
              Monthly Total {analyze ? '$57/month' : '$45/month'}
            </h3>
          </div>
        </div>
      </div>
      <div className={`investment__content  investment__content--3`}>
        <h2 className='investment__content-header'>
          The Real Cost ={' '}
          {noWebsite
            ? `${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(averageSalePrice * 5 * 12)}`
            : `${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              })
                .format(
                  averageSalePrice * numberOfLeads * conversionOfLeads * 2 * 12
                )
                .replace(/\D00(?=\D*$)/, '')}`}
          ...Profit!
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
        className={`intro__header-background intro__header-background--bottom intro__header-background--no intro__header-background--${modifier}`}
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className={`intro__header intro__header--${modifier}`}>
          Using that as a starting point, this is the real cost:
        </h1>
        <div
          className={`investment__content investment__content--2 investment__content--2--${modifier}`}
        >
          <p className='investment__content-text'>
            {noWebsite
              ? `You're currently getting 0 leads each month from your website. Lets assume an increase to 20 leads each month from your website based on a modest 2% conversion rate on 2000 visitors each month. Let's also assume 1 in 5 leads turn into customers`
              : `
            You're currently getting ${numberOfLeads} ${
                  numberOfLeads === 1 ? 'lead' : 'leads'
                } each month from the
            website and based on that traffic is about ${conversionRate}%
            conversion rate. You're also converting ${Math.trunc(
              conversionOfLeads * numberOfLeads
            )} of ${numberOfLeads} leads into
            clients.
            `}
          </p>
          {!noWebsite && (
            <p className='investment__content-text'>
              Our goal is to get it to {conversionRate * 2}% which will be{' '}
              {conversionRate * 2 * numberOfLeads} leads each month.
            </p>
          )}
          <p className='investment__content-text'>
            Your average deal is worth{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
              .format(averageSalePrice)
              .replace(/\D00(?=\D*$)/, '')}
            p/a which with your new monthly lead count and assuming{' '}
            {noWebsite
              ? 'our above conversion rates'
              : 'your conversion rate of leads stays the same'}{' '}
            is {noWebsite ? '4' : `${conversionOfLeads * numberOfLeads * 2}`}{' '}
            new clients each month at a{' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            })
              .format(conversionOfLeads * numberOfLeads * 2 * averageSalePrice)
              .replace(/\D00(?=\D*$)/, '')}
            p/a increase.
          </p>
          <p className='investment__content-text'>
            With this laid out, it's clear that by month 2, your investment will
            be paid back by way of annual recurring revenue.
          </p>

          <p className='investment__content-text'>
            By the end of Year 1, you'll have brought in{' '}
            {noWebsite
              ? `${new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
                  .format(averageSalePrice * 5 * 12)
                  .replace(/\D00(?=\D*$)/, '')}`
              : `${new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })
                  .format(
                    averageSalePrice *
                      numberOfLeads *
                      conversionOfLeads *
                      2 *
                      12
                  )
                  .replace(/\D00(?=\D*$)/, '')}`}{' '}
            of recurring revenue.
          </p>
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  company: state.company,
});
export default connect(mapStatetoProps, { setAnalyze })(Investment);
