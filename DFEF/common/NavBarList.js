import React, { useState, useEffect } from 'react';
import navArray from './NavBarArray';
import NavItem from './NavItem';
import { withRouter } from 'react-router-dom';

function NavBarList({ location }) {
  const [active, setActive] = useState('');
  const [hover, setHoverItem] = useState(false);

  useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);
  return (
    <ul className='nav-bar__list'>
      {navArray.map((nav, index) => (
        <NavItem
          nav={nav}
          index={index}
          key={nav.mainItem}
          active={active === nav.route}
          onClick={() => {
            // setActive(location.pathname.substring(1));
          }}
          onMouseEnter={() => setHoverItem(nav.mainItem)}
          hover={hover === nav.mainItem}
          onMouseLeave={() => setHoverItem('')}
        />
      ))}
    </ul>
  );
}

export default withRouter(NavBarList);
