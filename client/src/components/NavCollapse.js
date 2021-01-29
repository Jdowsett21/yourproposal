import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setNavOpen } from '../actions/InViewActions';
import navbarButton from '../img/svg/hexagonal.svg';
import logo from '../img/svg/logo3.svg';
import useWindowDimensions from '../utils/ScreenWidth';

function NavCollapse({ inView: { banner, navOpen }, setNavOpen }) {
  const { width } = useWindowDimensions();
  return (
    <div className='navbar'>
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
            className='navigation__background'
            style={{
              transform:
                navOpen && width >= 400
                  ? 'scale(35, 100)'
                  : navOpen && width < 400
                  ? 'scale(1, 100)'
                  : 'scale(0, 100)',
            }}
          ></div>
          <nav
            className='navigation__nav'
            style={{
              opacity: navOpen ? '1' : '0',
              width:
                navOpen && width >= 400
                  ? '35rem'
                  : navOpen && width < 400
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
                  <input
                    type='checkbox'
                    className='navigation__checkbox'
                    id='navi-toggle'
                  />
                  Home
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/industry'
                  className='navigation__link'
                >
                  Industries We Serve
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/careers'
                  className='navigation__link'
                >
                  Careers
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/accountability'
                  className='navigation__link'
                >
                  Accountability
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  smooth='true'
                  onClick={() => setNavOpen(false)}
                  to='/locations'
                  className='navigation__link'
                >
                  Locations
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
