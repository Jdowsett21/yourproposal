import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
function Home(props) {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <Process />
      <ContactForm />
    </div>
  );
}

export default Home;
