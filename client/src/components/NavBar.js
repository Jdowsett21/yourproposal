import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../img/logo.webp';

function NavBar() {
  return (
    <div className='navbar'>
      <nav className='nav-bar'>
        <img className='nav-bar__logo' src={logo} alt='logo' />
        <NavBarList />
      </nav>
    </div>
  );
}

export default NavBar;
