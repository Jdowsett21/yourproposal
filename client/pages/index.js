import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { companyInfo } from '../actions/VariableActions';
import { useRouter } from 'next/router';
import Intro from '../components/Intro';
import Website from '../components/Website';
import NavButton from '../components/NavButton';
import Terms from '../components/Terms';
import Proposal from '../components/Proposal';
import Guarantee from '../components/Guarantee';
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
  },
  companyInfo,
}) {
  const path = useRouter().pathname;

  useEffect(() => {
    companyInfo(path.substring(1));
  }, [path]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // useEffect(() => {
  //   signed && router.push('/Accepted');
  // }, [signed]);

  return (
    <>
      {signed ? (
        <>
          <Intro name={name} color1={color1} color2={color2} />
          <Website name={name} color1={color1} color2={color2} />
          <Timescale name={name} color1={color1} color2={color2} />
          <Paid name={name} color1={color1} color2={color2} />
          <Investment name={name} color1={color1} color2={color2} />
          <Guarantee name={name} color1={color1} color2={color2} />
          <Proposal
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
          <Terms name={name} color1={color1} color2={color2} />
        </>
      ) : (
        <div className='main-container'>
          <NavBar name={name} />

          {page === 'intro' ? (
            <Intro name={name} color1={color1} color2={color2} />
          ) : page === 'website' ? (
            <Website name={name} color1={color1} color2={color2} />
          ) : page === 'timescale' ? (
            <Timescale name={name} color1={color1} color2={color2} />
          ) : page === 'paid' ? (
            <Paid name={name} color1={color1} color2={color2} />
          ) : page === 'investment' ? (
            <Investment name={name} color1={color1} color2={color2} />
          ) : page === 'guarantee' ? (
            <Guarantee name={name} color1={color1} color2={color2} />
          ) : page === 'proposal' ? (
            <Proposal
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
      )}
    </>
  );
}

const mapStatetoProps = (state) => ({
  company: state.company,
});
export default connect(mapStatetoProps, { companyInfo })(App);
