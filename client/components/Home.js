import React from 'react';
import img from '../public/img/home.jpeg';
import logo from '../public/img/Company.png';
import Gradient from '../common/Gradient';
import { setPage } from '../actions/VariableActions';
import { connect } from 'react-redux';
function Home({ name, setPage }) {
  return (
    <div className='home'>
      <Gradient color1='#333' color2='#333' modifier='1' />
      <img className='img img--home' src={img} />
      <img src={logo} alt='logo' className='nav-bar__logo nav-bar__logo--1 ' />
      <h1 className='home__header'>Website Design Proposal for {name}</h1>
      <p className='home__text'>
        Written by James Dowsett-Cooper at Smarter Web Solutions
      </p>
      <button className='home__button' onClick={() => setPage('intro')}>
        START READING PROPOSAL
      </button>
    </div>
  );
}

export default connect(null, { setPage })(Home);
