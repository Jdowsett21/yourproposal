import React from 'react';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import { useRouter } from 'next/router';
import Head from 'next/head';
function App() {
  const site = 'https://smarterwebsolutions.ca';
  const canURL = site + useRouter().pathname;

  return (
    <>
      <Head>
        <link rel='canonical' href={canURL} />
      </Head>
      <div>
        <Carousel />
        <About />
        <Services />
        <Process />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
