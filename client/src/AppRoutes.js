import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
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
import ContactSuccess from './components/ContactSuccess';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
function AppRoutes() {
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
          <Route exact path='/contactSuccess'>
            <ContactSuccess />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/404'>
            <NotFoundPage />
          </Route>
          <Redirect to='/404' />
        </Switch>
        {/* </Suspense> */}
        <Footer />
      </ToTopPageOnReload>
    </>
  );
}
export default AppRoutes;
