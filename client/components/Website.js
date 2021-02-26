import React from 'react';
function Website({ color1, color2 }) {
  return (
    <div className='website'>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>Your New Website</h1>
      </div>
      <div className='website__secondary-section'>
        <h3>
          With extensive knowledge redesigning websites for businesses, there
          are several components to your site which would benefit you greatly.
        </h3>
      </div>
      <div className='website__content'>
        <h3 className='website__content-header'>Content for the site</h3>
        <div className='website__content-item'>
          <h5 className='website__item-header'>HOMEPAGE</h5>
          <p className='website__item-text'>
            Solid call to action attracting email subscribers from which a slow
            burn relationship will be formed.
          </p>
        </div>
        <div className='website__content-item'>
          <h5 className='website__item-header'>ABOUT</h5>
          <p className='website__item-text'>
            We suggest new team photos and action shots of people working. These
            are great and far better than stock photos which unfortunately
            litters your industry.
          </p>
        </div>{' '}
        <div className='website__content-item'>
          <h5 className='website__item-header'>CASE STUDIES</h5>
          <p className='website__item-text'>
            Listing clients are great, testimonials are better but giving it
            some context in a case study is considerably better. A range of case
            studies will serve you for years to come.
          </p>
        </div>{' '}
        <div className='website__content-item'>
          <h5 className='website__item-header'>SERVICES</h5>
          <p className='website__item-text'>
            This should be split up into the primary reasons people buy your
            services, with labeled headers to match. For example'Bookkeeping',
            'Saving Tax' and 'Audits'. Doing this means people can relate your
            headers to solutions to their problems in a fast and effective
            manner.
          </p>
        </div>
        <div className='website__content-item'>
          <h5 className='website__item-header'>CALL TO ACTION</h5>
          <p className='website__item-text'>
            We'll strategically place a contact form at the bottom of each page
            that makes sense.
          </p>
        </div>
        <div className='website__content-item'>
          <h5 className='website__item-header'>PROCESS</h5>
          <p className='website__item-text'>
            How do you work? What's required of your clients? It's worth
            detailing your process in advance.
          </p>
        </div>
        <div className='website__content-item'>
          <h5 className='website__item-header'>PRICING</h5>
          <p className='website__item-text'>
            It's worth giving an indication of your pricing. This will typically
            reduce the number of inquiries but increase the quality a huge
            amount. We can test the effect of this page being on the site.
          </p>
        </div>
        <div className='website__content-item'>
          <h5 className='website__item-header'>RESOURCES</h5>
          <p className='website__item-text'>
            In this day and age, it's vital to give away content and advice in
            advance in order to "win people over" that you're the right company
            for the job. Frequently asked questions from the kinds of clients
            you want more of is a great place to start when thinking about what
            content to produce.
          </p>
        </div>
      </div>
      <div
        className='intro__header-background'
        style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}
      >
        <h1 className='intro__header'>
          Relax, all of our websites are 'Responsive'. Computer, Tablet or Phone
          - it will look great!
        </h1>
      </div>
    </div>
  );
}

export default Website;
