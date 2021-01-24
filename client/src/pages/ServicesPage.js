import React from 'react';
import teamwork from '../img/teamwork.jpg';
import Banner from '../components/Banner';
import monitor from '../img/svg/mobile friendly.svg';
import mobile from '../img/svg/mobilePhone.svg';
import responsive from '../img/file.png';
function ServicesPage(props) {
  return (
    <div>
      <Banner img={teamwork} text='Services' />
      <div className='services__section services__section--odd'>
        <div className='services__title-section'>
          <h3 className='services__title'>Responsive Design</h3>
        </div>
        <p className='services__text'>
          With each passing day the percentage of individuals browsing on their
          mobile application increases. You need a website that looks just as
          amazing on your computer as it does on any other device be it a phone
          or tablet. Building a website with Smarter Web Solutions means you are
          receiving a beautiful site for every device. We have the skills to
          create an intuitive experience and a headache free process for you.
          Allow your users to shop on their phone, easily view your inventory or
          allow your staff to manage orders. We make sure you are not limited no
          matter what device you are on.
        </p>
        <img className='services__image  ' alt='monitor ' src={monitor}></img>
      </div>

      <div className='services__section '>
        <div className='services__title-section'>
          <h3 className='services__title'>Modern UI/UX Design</h3>
        </div>
        <p className='services__text'>
          It is our belief at Smarter Web Solutions that your webpage is your
          digital storefront. A professionally designed website goes a long way
          to inform your customers that they are interacting with a state of the
          art business. We are constantly keeping an eye on the latest trends
          and technologies that are developing each and every day allowing
          websites to be more interactive, attractive and user friendly. Many
          out of the box web design sites leave a lot to be desired. It is very
          frustrating when there are some features that are unfortunately
          unavailable. That is not the case with Smarter Web Solutions, whatever
          idea, design or markup you have in mind we can create any
          customization to ensure your website looks exactly how you desire.
        </p>
      </div>
      <div className='services__section services__section--odd'>
        <div className='services__title-section'>
          <h3 className='services__title services__title--odd'>
            Customized Systems
          </h3>
        </div>
        <p className='services__text services__text--odd'>
          Are you in the need of a customized database, crm or any other
          personalized systems but are unable to afford th extremely high price
          of a building your own desktop application. We are able to build any
          system you would like on a web application. Allow staff to sign in
          from anywhere to track orders, update delivery information or track
          inventory. Link your customized software to your website so that your
          inventory and user delivery status is updated automatically.
        </p>
        <img
          alt='monitor '
          className='services__image services__image--1'
          src={responsive}
        ></img>
      </div>
      <div className='services__section '>
        <div className='services__title-section'>
          <h3 className='services__title '>Profit Online</h3>
        </div>
        <p className='services__text '>
          Roughly 30% of all commerce sales are occurring over mobile or web
          applications. Now more than ever with the ongoing Covid-19 pandemic,
          users want to be able to safely shop from the comfort of their home.
          We can set up the entire system so you can begin profiting from online
          shopping today. This will reduce the workload of your staff taking
          online phone orders or trying to perform cumbersome curbside
          transactions.
        </p>
      </div>
      <div className='services__section services__section--odd'>
        <div className='services__title-section'>
          <h3 className='services__title'>Mobile Flexibility</h3>
        </div>
        <p className='services__text'>
          One of the greatest benefits of a web application is that you can save
          a lot of money as it only has to be built once. Mobile/Desktop
          applications that need to be built on Android and Apple in order to
          reach all your customers. Furthermore web applications do not rely on
          native mobile settings they rely on browser settings which are much
          more stable and will lead to your website lasting much longer before
          it is in need of updating.
        </p>
        <img
          src={mobile}
          alt=''
          className='services__image services__image--2'
        />
      </div>
      <div className='services__section '>
        <div className='services__title-section'>
          <h3 className='services__title'>Technology Integration</h3>
        </div>
        <p className='services__text'>
          Out of the box websites lack functionality and you aren't always able
          to add exactly what you want. Whether you want to add Google Maps or
          your Twitter feed within the site, we can embed any programs you would
          like to make the user experience more enjoyable. We would be add the
          data and communication with other API's so that you can track
          inventory or display stats for your users.
        </p>
      </div>
    </div>
  );
}

export default ServicesPage;
