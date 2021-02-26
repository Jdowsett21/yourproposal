import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../public/img/Company.png';
import { setSigned, downloadSite } from '../actions/VariableActions';
function Accepted({ company: { name }, setSigned, downloadSite }) {
  useEffect(() => {
    setSigned();
  }, []);
  return (
    <div className='accepted'>
      <div className='accepted__box'>
        <img src={logo} alt='logo' className='accepted__logo' />
        <p className='accepted-text'>
          Thank you for signing our Proposal. We will be in touch shortly so
          that we can get started
        </p>
        <button
          onClick={() => downloadSite(name)}
          className='accepted__download'
        >
          DOWNLOAD AS A PDF
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  company: state.company,
});
export default connect(mapStateToProps, { setSigned, downloadSite })(Accepted);
