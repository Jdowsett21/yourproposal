import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppShell from './common/AppShell';
import Loader from './components/Loader';
import { Provider } from 'react-redux';
import store from './utils/store';

import ReactGA from 'react-ga';
import AppRoutes from './AppRoutes';

const LoadingFallback = () => (
  <AppShell>
    <Loader />
  </AppShell>
);

function App() {
  ReactGA.initialize('UA-189418529-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}

export default App;
