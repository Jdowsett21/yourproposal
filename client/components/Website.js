import React from 'react';
import deployment from '../public/img/shutterstock_1443633284.jpg';
import Gradient from '../common/Gradient';

function Website({ color1, color2, modifier, noWebsite }) {
  return (
    <div className='website'>
      <div
        className={`intro__header-background intro__header-background--${modifier}`}
      >
        <Gradient color1={color1} color2={color2} />

        <h1 className={`intro__header intro__header--${modifier}`} style={{}}>
          Your New Website
        </h1>
        <img src={deployment} alt='' className='img' />
      </div>
      <div className={`website__content website__content--${modifier}`}>
        <h3 className='website__content-info'>
          With extensive knowledge {noWebsite ? 'designing' : 'redesigning'}{' '}
          websites for businesses, there are several components to your site
          which would benefit you greatly.
        </h3>
        <h3 className='website__content-header'>Content for the site</h3>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              HOMEPAGE
            </h5>
          </div>
          <p className='website__item-text'>
            Solid call to action attracting email subscribers from which a slow
            burn relationship will be formed.
          </p>
        </div>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              ABOUT
            </h5>
          </div>
          <p className='website__item-text'>
            We suggest new team photos and action shots of people working. These
            are great and far better than stock photos which unfortunately
            litters your industry.
          </p>
        </div>{' '}
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              CASE STUDIES
            </h5>
          </div>
          <p className='website__item-text'>
            Listing clients are great, testimonials are better but giving it
            some context in a case study is considerably better. A range of case
            studies will serve you for years to come.
          </p>
        </div>{' '}
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              SERVICES
            </h5>
          </div>
          <p className='website__item-text'>
            This should be split up into the primary reasons people buy your
            services, with labeled headers to match. For example 'Civil Law',
            'Employment Law' and 'Immigration'. Doing this means people can
            relate your headers to solutions to their problems in a fast and
            effective manner.
          </p>
        </div>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              CALL TO ACTION
            </h5>
          </div>
          <p className='website__item-text'>
            We'll strategically place a contact form at the bottom of each page
            that makes sense.
          </p>
        </div>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              PROCESS
            </h5>
          </div>
          <p className='website__item-text'>
            How do you work? What's required of your clients? It's worth
            detailing your process in advance.
          </p>
        </div>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              PRICING
            </h5>
          </div>
          <p className='website__item-text'>
            It's worth giving an indication of your pricing. This will typically
            reduce the number of inquiries but increase the quality a huge
            amount. We can test the effect of this page being on the site.
          </p>
        </div>
        <div className='website__content-item'>
          <div className='website__item-header-section'>
            <h5
              className='website__item-header'
              style={{ borderColor: color1 }}
            >
              RESOURCES
            </h5>
          </div>
          <p className='website__item-text' style={{ paddingBottom: '10rem' }}>
            In this day and age, it's vital to give away content and advice in
            advance in order to "win people over" that you're the right company
            for the job. Frequently asked questions from the kinds of clients
            you want more of is a great place to start when thinking about what
            content to produce.
          </p>
        </div>
      </div>
      <div
        className={`intro__header-background  intro__header-background--bottom intro__header-background--no intro__header-background--${modifier}`}
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h4 className={`intro__header intro__header--${modifier}`} style={{}}>
          Relax, all of our websites are 'Responsive'. Computer, Tablet or Phone
          - it will look great!
        </h4>
      </div>
    </div>
  );
}

export default Website;
