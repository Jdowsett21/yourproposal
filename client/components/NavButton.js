import React from 'react';
import sprite from '../public/img/svg/sprite.svg';
import { Link } from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { setPage } from '../actions/VariableActions';
function NavButton({ company: { page }, setPage }) {
  return (
    <div className='nav-button'>
      {page === 'intro' ? (
        <div
          className='nav-button__icon-circle'
          onClick={() => setPage('website')}
        >
          <svg className='nav-button__icon'>
            <use href={sprite + '#Capa_1'}></use>
          </svg>
        </div>
      ) : page === 'terms' ? (
        <div
          className='nav-button__icon-circle'
          onClick={() => setPage('proposal')}
        >
          <svg className='nav-button__icon'>
            <use href={sprite + '#Capa_2'}></use>
          </svg>
        </div>
      ) : (
        <div className='nav-button-section'>
          <div
            className='nav-button__icon-circle nav-button__icon-circle--1  '
            onClick={() =>
              setPage(
                page === 'proposal'
                  ? 'guarantee'
                  : page === 'guarantee'
                  ? 'investment'
                  : page === 'investment'
                  ? 'paid'
                  : page === 'paid'
                  ? 'timescale'
                  : page === 'timescale'
                  ? 'website'
                  : 'intro'
              )
            }
          >
            <svg className='nav-button__icon'>
              <use href={sprite + '#Capa_2'}></use>
            </svg>
          </div>
          <div
            className='nav-button__icon-circle nav-button__icon-circle--2  '
            onClick={() =>
              setPage(
                page === 'website'
                  ? 'timescale'
                  : page === 'timescale'
                  ? 'paid'
                  : page === 'paid'
                  ? 'investment'
                  : page === 'investment'
                  ? 'guarantee'
                  : page === 'guarantee'
                  ? 'proposal'
                  : 'terms'
              )
            }
          >
            <svg className='nav-button__icon'>
              <use href={sprite + '#Capa_1'}></use>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStatetoProps = (state) => ({
  company: state.company,
});
export default connect(mapStatetoProps, { setPage })(NavButton);
