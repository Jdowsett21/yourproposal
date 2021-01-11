import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AppShell from './common/AppShell';
import Loader from './components/Loader';
import { Provider } from 'react-redux';
import store from './utils/store';

import ToTopPageOnReload from './utils/ToTopPageOnReload';
import Home from './pages/Home';

const LoadingFallback = () => (
  <AppShell>
    <Loader />
  </AppShell>
);
const AppRoutes = () => (
  <>
    <ToTopPageOnReload>
      <NavBar />
      {/* <Suspense fallback={<LoadingFallback />}> */}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Redirect from='/*' to='/' />
      </Switch>
      {/* </Suspense> */}
      <Footer />
    </ToTopPageOnReload>
  </>
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </Router>
  );
}

export default App;
