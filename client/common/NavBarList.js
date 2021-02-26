import React, { useState, useEffect } from 'react';
import navArray from './NavBarArray';
import NavItem from './NavItem';
import { useRouter } from 'next/router';
import { setPage } from '../actions/VariableActions';
import { connect } from 'react-redux';
function NavBarList({ setPage, company: { page } }) {
  const [hover, setHoverItem] = useState(false);
  const path = useRouter().pathname.substring(1);

  return (
    <ul className='nav-bar__list'>
      {navArray.map((nav, index) => (
        <NavItem
          nav={nav}
          index={index}
          key={nav.mainItem}
          active={page === nav.route}
          onClick={() => {
            setPage(nav.route);
          }}
          onMouseEnter={() => setHoverItem(nav.mainItem)}
          hover={hover === nav.mainItem}
          onMouseLeave={() => setHoverItem('')}
        />
      ))}
    </ul>
  );
}

const mapStatetoProps = (state) => ({
  company: state.company,
});

export default connect(mapStatetoProps, { setPage })(NavBarList);
