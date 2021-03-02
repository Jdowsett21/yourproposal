import React from 'react';

function Terms({ name, color1, color2, modifier }) {
  return (
    <div className='website'>
      <div
        className={`intro__header-background  intro__header-background--${modifier} intro__header-background--no `}
        style={{
          backgroundImage: `linear-gradient(${color1}, ${color2})`,
        }}
      >
        <h1 className='intro__header'>Terms & Conditions</h1>
      </div>
      <div
        className={`investment__content investment__content--${modifier}`}
        style={{ marginTop: '.5rem' }}
      >
        {' '}
        <p className='investment__content-text--2'>Summary</p>
        <p className='investment__content-text'>
          You, {name} are hiring Smarter Web Solutions located at 1960 Queen
          Street East, Toronto, Ontario to design and develop a website for the
          estimated total price of $2,995 outlined in our previous
          correspondence.
        </p>
        <p className='investment__content-text'>
          As my customer, you have the power and ability to enter into this
          contract on behalf of your company or organization. You agree to
          provide me with everything that I need to complete the project
          including text, images, fonts and other information as and when I need
          it, and in the format that I ask for. You agree to review my work,
          provide feedback, and sign-off approval in a timely manner and are
          bound by any deadlines that we set together. You also agree to keep to
          the payment schedule set out in this proposal.
        </p>
        <p className='investment__content-text'>
          I have the experience and ability to perform the services you need and
          I will carry them out in a professional and timely manner. I will
          endeavour to meet all the deadlines set but am not responsible for a
          missed launch date or a deadline if you have been late in supplying
          materials or have not approved my work on time at any stage. If the
          content that you are responsible for providing is not given before the
          agreed upon launch date, I will launch your website live with
          placeholder photo's and text and will add your content when it is
          received. Final payment will still be given with launch of placeholder
          text and photos version of site. I will also maintain the
          confidentiality of any information that you give me.
        </p>
        <p className='investment__content-text--2'>Details of the works</p>
        <p className='investment__content-text'>
          I will create designs for the look, layout, and functionality of your
          website. This contract includes one main design and two opportunities
          for you to make revisions to the final design. If you are not happy
          with the design at that point, I will provide you with an additional
          quote for extra design work needed. If instead, you wish to cancel our
          agreement, you may do so and I will retain the initial payment for the
          work completed to date.
        </p>
        <p className='investment__content-text--2'>HTML/CSS layout templates</p>
        <p className='investment__content-text'>
          I will develop using valid HTML5 markup and CSS3 for styling. I will
          test all my markup and CSS in current versions of all major browsers
          including those made by Apple, Microsoft, Mozilla, Google and Opera. I
          will also test to ensure that pages will display visually in a
          similar—not necessarily an identical—way in Microsoft Internet
          Explorer 7 for Windows as this browser is now past its sell-by date. I
          will not test these templates in old or abandoned browsers, for
          example, Microsoft Internet Explorer 5, 5.5 or 6 for Windows or Mac,
          previous versions of Apple's Safari, Mozilla Firefox or Opera unless
          otherwise specified.
        </p>
        <p className='investment__content-text--2'>Text content</p>
        <p className='investment__content-text'>
          I am not responsible for writing or inputting any text copy. I will be
          happy to help, but significant work on my part will result in a charge
          above and beyond the original price. This will not be done without
          your approval of an additional quote provided in advance.
        </p>
        <p className='investment__content-text--2'>Photographs</p>
        <p className='investment__content-text'>
          If needed, you will supply me photographs either in digital or printed
          format. If you choose to buy stock photographs that price will be
          added to the initial quote. Stock photography will not be purchased
          without your written approval.
        </p>
        <p className='investment__content-text--2'>Changes and revisions</p>
        <p className='investment__content-text'>
          The estimate/quotation prices in this proposal are based on the time I
          estimate I will need to accomplish everything that you have told me
          you want to achieve. If you do want to change your mind, add extra
          pages or templates, or even add new functionality, that won't be a
          problem. At that time you will be provided with an additional quote
          for the extra work.
        </p>
        <p className='investment__content-text--2'>Technical support</p>
        <p className='investment__content-text'>
          As agreed, the quote provided includes the installation and set up of
          your site on your server as well as the implementation of Google
          Analytics. Updates to, and management of that server, plus any support
          issues will be up to you.
        </p>
        <p className='investment__content-text'>
          I do not offer or include technical support for website hosting,
          email, or other services relating to website hosting. If you do
          require help with anything beyond the design and development of your
          site, I will be happy to help.
        </p>
        <p className='investment__content-text--2'>Legal</p>
        <p className='investment__content-text'>
          I am not liable to you or any third party for damages, including lost
          profits, lost savings, or other incidental, consequential or special
          damages arising out of the operation of or inability to operate this
          website and any other web pages—even if you have advised me of the
          possibilities of such damages.
        </p>
        <p className='investment__content-text'>
          If any provision of this agreement shall be unlawful, void, or for any
          reason unenforceable, then that provision shall be deemed severable
          from this agreement and shall not affect the validity and
          enforceability of any remaining provisions.
        </p>
        <p className='investment__content-text--2'>Copyrights</p>
        <p className='investment__content-text'>
          You guarantee to me that any elements of text, graphics, photos,
          designs, trademarks, or other artwork that you provide me for
          inclusion in the website are either owned by you or that you have
          permission to use them.
        </p>
        <p className='investment__content-text'>
          When I receive your final payment, copyright is automatically assigned
          as follows:
        </p>
        <p className='investment__content-text'>
          You own the graphics and other visual elements that I create for you
          for this project. I will give you a copy of all files and you should
          store them carefully as I am not required to keep them or provide any
          native source files that I used in making them.
        </p>
        <p className='investment__content-text'>
          You also own text content, photographs, and other data you provided
          unless someone else owns them. I own the HTML markup, CSS, and other
          code and I license it to you for use on only this project.
        </p>
        <p className='investment__content-text'>
          I also reserve the right to display and link to your completed project
          as part of my portfolio and to write about the project on websites, in
          magazine articles, and in books.
        </p>
        <p className='investment__content-text--2'>Payments</p>
        <p className='investment__content-text'>
          50% of total fee upon agreement of initial design: $1,497.5 CAD
        </p>
        <p className='investment__content-text'>
          25% of total on delivery of the website (pre-snagging):$748.75 CAD
        </p>
        <p className='investment__content-text'>
          25% of total fee on completion of the project: $748.75
        </p>
        <p className='investment__content-text'>
          Interest accrued if payment is more than 14 days late. We reserve the
          right to add 5% any outstanding balance every 7 days, starting from
          15th day after receipt of the finished product.
        </p>
        <p className='investment__content-text--2'>
          You cannot transfer this contract to anyone else without my
          permission. This contract stays in place and need not be renewed. If
          for some reason one part of this contract becomes invalid or
          unenforceable, the remaining parts of it remain in place.
        </p>
      </div>
    </div>
  );
}

export default Terms;
