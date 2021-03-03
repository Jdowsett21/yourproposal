import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { companyInfo } from '../actions/VariableActions';
import { useRouter } from 'next/router';
import Intro from '../components/Intro';
import Website from '../components/Website';
import NavButton from '../components/NavButton';
import Terms from '../components/Terms';
import Proposal from '../components/Proposal';
import Home from '../components/Home';
import Investment from '../components/Investment';
import Paid from '../components/Paid';
import Timescale from '../components/Timescale';
import NavBar from '../components/NavBar';
function App({
  company: {
    name,
    color1,
    color2,
    page,
    signed,
    ipAddress,
    signatureText,
    signatureImage,
    dateSigned,
    type,
    noWebsite,
    analyze,
  },
  companyInfo,
}) {
  const path = useRouter().pathname;
  const router = useRouter();
  console.log('🚀 ~ file: index.js ~ line 34 ~ router', router);
  useEffect(() => {
    companyInfo(path.substring(1));
  }, [path]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    signed && router.push('/Accepted');
  }, [signed]);
  return page === 'home' ? (
    <Home name={name} />
  ) : (
    <div className='main-container'>
      <NavBar name={name} />

      {page === 'intro' ? (
        <Intro
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
        />
      ) : page === 'website' ? (
        <Website
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
        />
      ) : page === 'timescale' ? (
        <Timescale
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
        />
      ) : page === 'paid' ? (
        <Paid
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
        />
      ) : page === 'investment' ? (
        <Investment
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
        />
      ) : page === 'proposal' ? (
        <Proposal
          noWebsite={noWebsite}
          name={name}
          color1={color1}
          color2={color2}
          signed={signed}
          ipAddress={ipAddress}
          dateSigned={dateSigned}
          signatureImage={signatureImage}
          signatureText={signatureText}
          type={type}
        />
      ) : (
        <Terms name={name} color1={color1} color2={color2} />
      )}
      <NavButton page={page} />
    </div>
  );
}

const mapStatetoProps = (state) => ({
  company: state.company,
});
export default connect(mapStatetoProps, { companyInfo })(App);
