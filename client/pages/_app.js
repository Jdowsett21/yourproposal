import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import '../App.scss';
import { Provider } from 'react-redux';
import { useStore } from '../utils/store';
import ToTopPageOnReload from '../utils/ToTopPageOnReload';
import NavCollapse from '../components/NavCollapse';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { StaticRouter as Router } from 'react-router-dom';
import Head from 'next/head';
import { useRouter } from 'next/router';
import getWindowDimensions from '../utils/ScreenWidth1';
import dynamic from 'next/dynamic';
const MyApp = ({ Component, pageProps }) => {
  const DynamicComponent = dynamic(() => import('../utils/ScreenWidth1'), {
    ssr: false,
  });
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }
  const value = useWindowDimensions();
  console.log(value);
  useEffect(() => {
    ReactGA.initialize('UA-189418529-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  const canURL = useRouter().pathname;
  console.log('🚀 ~ file: _app.js ~ line 22 ~ MyApp ~ canURL', canURL);

  const store = useStore(pageProps.initialReduxState);
  return (
    <Router>
      <Provider store={store}>
        <Head>
          <meta name='robots' content='index' />
          <meta
            name='keywords'
            content='web development, web design, e-commerce, website, developer, software'
          />
          <meta name='image' content='../src/img/WebDesign.jpg'></meta>
        </Head>
        <DynamicComponent />
        <ToTopPageOnReload>
          <Component {...pageProps} />
        </ToTopPageOnReload>
        <Footer />
      </Provider>
    </Router>
  );
};

export default MyApp;
