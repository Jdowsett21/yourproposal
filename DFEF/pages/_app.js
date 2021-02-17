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
const MyApp = ({ Component, pageProps }) => {
  const mediaQuery = useMediaQuery(1100);

  useEffect(() => {
    ReactGA.initialize('UA-189418529-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  const store = useStore(pageProps.initialReduxState);
  return (
    <Router>
      <Provider store={store}>
        <ToTopPageOnReload>
          {!mediaQuery ? <NavBar /> : <NavCollapse />}
          <Component {...pageProps} />
        </ToTopPageOnReload>
        <Footer />
      </Provider>
    </Router>
  );
};

export default MyApp;
