import React from 'react';
import NavBarList from '../common/NavBarList';
import logo from '../public/img/Company.png';
function NavBar() {
  return (
    <div className='nav-bar'>
      <img src={logo} alt='logo' className='nav-bar__logo' />
      <div className='navbar__logo'></div>
      <NavBarList />
    </div>
  );
}

export default NavBar;
