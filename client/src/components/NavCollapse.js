import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNavOpen } from '../actions/InViewActions';
import navbarButton from '../img/svg/navBarButton.svg';
import logo from '../img/logo.png';
import useWindowDimensions from '../utils/ScreenWidth';

function NavCollapse({ inView: { banner, navOpen }, setNavOpen }) {
  const node = useRef();
  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick); // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    } // outside click
    setNavOpen(false);
  };
  const { width } = useWindowDimensions();
  return (
    <div ref={node}>
      <nav className='nav-bar nav-bar--collapse'>
        <img
          className='nav-bar__logo nav-bar__logo--collapse'
          src={logo}
          alt='logo'
        />
        <div className='navigation'>
          <div className='navigation__icon-section'>
            <img
              className='navigation__icon--1'
              src={navbarButton}
              alt='navbar button'
              onClick={() => setNavOpen(!navOpen)}
              style={{ transform: navOpen ? 'rotate(150deg)' : 'rotate(0)' }}
            />
            <div
              onClick={() => setNavOpen(!navOpen)}
              className='navigation__line-1'
              style={{ transform: navOpen && 'rotate(-135deg)' }}
            ></div>
            <div
              onClick={() => setNavOpen(!navOpen)}
              className='navigation__line-2'
              style={{
                transform: navOpen ? 'rotate(-135deg)' : 'rotate(0deg)',
              }}
            ></div>
          </div>
          <div
            className={
              navOpen && width >= 450
                ? 'navigation__background navigation__background__active'
                : navOpen && width < 450
                ? 'navigation__background__active-2 navigation__background'
                : 'navigation__background'
            }
            ref={node}
            // style={{
            //   display: 'inline-block',
            //   transform:
            //       ? 'scale(.35, 200%)'
            //       :
            //       ? 'scale(1, 200%)'
            //       : 'scale(0, 200%)',
            // }}
          ></div>
          <nav
            className='navigation__nav'
            style={{
              opacity: navOpen ? '1' : '0',
              width:
                navOpen && width >= 450
                  ? '35%'
                  : navOpen && width < 450
                  ? '100%'
                  : '0%',
            }}
          >
            <ul className='navigation__list'>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/'
                  className='navigation__link '
                >
                  Home
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/services'
                  className='navigation__link'
                >
                  Services
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/process'
                  className='navigation__link'
                >
                  Process
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/portfolio'
                  className='navigation__link'
                >
                  Portfolio
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/technical'
                  className='navigation__link'
                >
                  Technical
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/contact'
                  className='navigation__link'
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({
  inView: state.inView,
});

export default connect(mapStateToProps, { setNavOpen })(NavCollapse);
