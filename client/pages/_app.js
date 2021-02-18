import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import '../App.scss';
import { Provider } from 'react-redux';
import { useStore } from '../utils/store';
import ToTopPageOnReload from '../utils/ToTopPageOnReload';
import NavCollapse from '../components/NavCollapse';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { StaticRouter as Router } from 'react-router-dom';
import { useMediaQuery } from '../utils/ScreenWidth';
import Head from 'next/head';
import { useRouter } from 'next/router';
const MyApp = ({ Component, pageProps }) => {
  const mediaQuery = useMediaQuery(1100);

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
        <ToTopPageOnReload>
          {!mediaQuery ? <NavBar /> : <NavCollapse />}
          <Component {...pageProps} />
          <Footer />
        </ToTopPageOnReload>
      </Provider>
    </Router>
  );
};

export default MyApp;
