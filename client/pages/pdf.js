import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { companyInfo } from '../actions/VariableActions';

import Intro from '../components/Intro';
import Website from '../components/Website';
import { useRouter } from 'next/router';
import Terms from '../components/Terms';
import ProposalSigned from '../components/ProposalSigned';
import Guarantee from '../components/Guarantee';
import Investment from '../components/Investment';
import Paid from '../components/Paid';
import Timescale from '../components/Timescale';

function Pdf({
  companyInfo,
  company: {
    name,
    color1,
    color2,
    noWebsite,
    signed,
    ipAddress,
    signatureText,
    signatureImage,
    dateSigned,
    type,
  },
}) {
  const path = useRouter().pathname;
  useEffect(() => {
    companyInfo(path.substring(1, path.length - 1));
  }, [path]);
  console.log(path.substring(1, path.length - 1));
  return (
    <>
      <ProposalSigned
        noWebsite={noWebsite}
        modifier='pdf
          '
        name={name}
        color1={color1}
        color2={color2}
        signed={signed}
        ipAddress={ipAddress}
        dateSigned={dateSigned}
        signatureImage={signatureImage}
        signatureText={signatureText}
        web
        type={type}
      />
      <Intro
        noWebsite={noWebsite}
        modifier='pdf
      '
        name={name}
        color1={color1}
        color2={color2}
      />
      <Website
        noWebsite={noWebsite}
        modifier='pdf
      '
        name={name}
        color1={color1}
        color2={color2}
      />
      <Timescale
        noWebsite={noWebsite}
        modifier='pdf
      '
        name={name}
        color1={color1}
        color2={color2}
      />
      <Paid
        noWebsite={noWebsite}
        modifier='pdf
      '
        name={name}
        color1={color1}
        color2={color2}
      />
      <Investment
        noWebsite={noWebsite}
        modifier='pdf
      '
        name={name}
        color1={color1}
        color2={color2}
      />

      <Terms name={name} color1={color1} color2={color2} modifier='pdf ' />
    </>
  );
}

const mapStatetoProps = (state) => ({
  company: state.company,
});
export default connect(mapStatetoProps, { companyInfo })(Pdf);
