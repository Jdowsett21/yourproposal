import React, { useEffect } from 'react';
import '../App.scss';
import ToTopPageOnReload from '../utils/ToTopPageOnReload';

import { Provider } from 'react-redux';
import { useStore } from '../utils/store';
import { StaticRouter as Router } from 'react-router-dom';
import Head from 'next/head';
const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Router>
      <Provider store={store}>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='robots' content='index' />
          <title>Web Design Toronto - Web Development Company Toronto</title>
          <meta
            name='description'
            content='Web Design Company in Toronto,
    specializing in custom website design, web development, e-commerce &amp; custom
    web based software.'
          ></meta>
          <meta name='image' content='../src/img/WebDesign.jpg'></meta>
        </Head>
        <ToTopPageOnReload>
          <Component {...pageProps} />
        </ToTopPageOnReload>
      </Provider>
    </Router>
  );
};

export default MyApp;
