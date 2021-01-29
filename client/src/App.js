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
import useWindowDimensions from './utils/ScreenWidth';

import ToTopPageOnReload from './utils/ToTopPageOnReload';
import Home from './pages/Home';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import TechnicalPage from './pages/TechnicalPage';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import MediaorPage from './pages/MediaorPage';
import GrivetyPage from './pages/GrivetyPage';
import CleanSoilsPage from './pages/CleanSoilsPage';
import NavCollapse from './components/NavCollapse';

const LoadingFallback = () => (
  <AppShell>
    <Loader />
  </AppShell>
);
const AppRoutes = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <ToTopPageOnReload>
        {width > 1100 ? <NavBar /> : <NavCollapse />}

        {/* <Suspense fallback={<LoadingFallback />}> */}

        <Switch>
          <Route exact path='/process'>
            <ProcessPage />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/mediaor'>
            <MediaorPage />
          </Route>
          <Route exact path='/grivety'>
            <GrivetyPage />
          </Route>
          <Route exact path='/cleanSoils'>
            <CleanSoilsPage />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
          <Route exact path='/services'>
            <ServicesPage />
          </Route>
          <Route exact path='/technical'>
            <TechnicalPage />
          </Route>
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
};

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
