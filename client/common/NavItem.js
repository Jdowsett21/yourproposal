import React from 'react';
import Link from 'next/link';
import { setPage } from '../actions/VariableActions';
function NavItem({
  nav,
  active,
  hover,
  onClick,
  onMouseEnter,
  onMouseLeave,
  setPage,
}) {
  return (
    <li
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        active
          ? 'nav-bar__item--active nav-bar__item'
          : hover
          ? 'nav-bar__item--hover nav-bar__item'
          : 'nav-bar__item'
      }
    >
      <a
        className={
          active
            ? 'nav-bar__link--active nav-bar__link'
            : hover
            ? 'nav-bar__link--hover nav-bar__link'
            : 'nav-bar__link'
        }
      >
        {nav.mainItem}
      </a>
    </li>
  );
}

export default NavItem;
