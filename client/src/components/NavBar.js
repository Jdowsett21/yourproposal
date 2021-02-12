import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../img/logo.png';
import logoweb from '../img/logo.webp';

function NavBar() {
  return (
    <div className='navbar'>
      <nav className='nav-bar'>
        <picture className='nav-bar__logo '>
          <source srcSet={logoweb} type='image/webp' />
          <source srcSet={logo} type='image/jpeg' />
          <img
            className='nav-bar__logo nav-bar__logo--collapse'
            src={logo}
            alt='logo'
            loading='lazy'
          />
        </picture>
        <NavBarList />
      </nav>
    </div>
  );
}

export default NavBar;
