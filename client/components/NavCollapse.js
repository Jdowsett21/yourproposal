import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setNavOpen } from '../actions/InViewActions';
import logo from '../public/img/logo.png';
import logoweb from '../public/img/logo.webp';
import { useMediaQuery } from '../utils/ScreenWidth';

function NavCollapse({ inView: { navOpen }, setNavOpen }) {
  const mediaQuery = useMediaQuery(450);
  return (
    <div ref={node}>
      <nav className='nav-bar nav-bar--collapse'>
        <picture className='nav-bar__logo-picture '>
          <source srcSet={logoweb} type='image/webp' />
          <source srcSet={logo} type='image/jpeg' />
          <img
            className='nav-bar__logo nav-bar__logo--collapse'
            src={logo}
            alt='logo'
            loading='lazy'
          />
        </picture>

        <div className='navigation'>
          <div className='navigation__icon-section'>
            <img
              className='navigation__icon--1'
              src={hello}
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
              navOpen && !mediaQuery
                ? 'navigation__background navigation__background__active'
                : navOpen && mediaQuery
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
                navOpen && !mediaQuery
                  ? '35%'
                  : navOpen && mediaQuery
                  ? '100%'
                  : '0%',
            }}
          >
            <ul className='navigation__list'>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/'>
                  <a className='navigation__link '>Home</a>
                </Link>
              </li>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/services'>
                  <a className='navigation__link'>Services</a>
                </Link>
              </li>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/process'>
                  <a className='navigation__link'>Process</a>
                </Link>
              </li>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/portfolio'>
                  <a className='navigation__link'>Portfolio</a>
                </Link>
              </li>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/technical'>
                  <a className='navigation__link'>Technical</a>
                </Link>
              </li>
              <li
                className='navigation__item'
                smooth='true'
                onClick={() => setNavOpen(false)}
              >
                <Link href='/contact'>
                  <a className='navigation__link'>Contact</a>
                </Link>
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
