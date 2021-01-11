import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Projects';
import Process from '../components/Process';
function Home(props) {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

export default Home;
