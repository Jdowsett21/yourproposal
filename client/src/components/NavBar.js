import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../img/svg/logo3.svg';

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
