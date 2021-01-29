import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// have to set Navlink to smooth='true
const ScrollIntoView = ({ children, location }) => {
  console.log(
    '🚀 ~ file: ToTopPageOnReload.js ~ line 7 ~ ScrollIntoView ~ location',
    location
  );
  const prevLocation = useRef();
  console.log(
    '🚀 ~ file: ToTopPageOnReload.js ~ line 12 ~ ScrollIntoView ~ prevLocation',
    prevLocation
  );

  useEffect(() => {
    if (
      (prevLocation.current !== location.pathname && location.hash === '') ||
      (location.pathname !== '/services' && prevLocation.current === '/')
    ) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default withRouter(ScrollIntoView);
