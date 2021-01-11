import React from 'react';
import { NavLink } from 'react-router-dom';
function NavItem({ nav, active, hover, onClick, onMouseEnter, onMouseLeave }) {
  return (
    <li
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        active || hover
          ? 'nav-bar__item--active nav-bar__item'
          : 'nav-bar__item'
      }
    >
      <NavLink
        smooth='true'
        to={`/${nav.route}`}
        className={
          active || hover
            ? 'nav-bar__link--active nav-bar__link'
            : 'nav-bar__link'
        }
      >
        {nav.mainItem}
      </NavLink>
    </li>
  );
}

export default NavItem;
