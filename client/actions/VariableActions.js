import { SIGNED, SET_COMPANY_INFO, SET_SIGNATURE, SET_PAGE } from './types';
import { publicFetch } from '../utils/publicFetch';
import Modal from 'react-modal';

export const companyInfo = (companyName) => async (dispatch) => {
  const { data } = await publicFetch.get(`/company/${companyName}`);
  dispatch({
    type: SET_COMPANY_INFO,
    payload: data[0],
  });
};

export const setCompanyInfo = (id) => async (dispatch) => {
  const { data } = await publicFetch.post('/company', id);
  dispatch({
    type: SET_COMPANY_INFO,
    payload: data,
  });
};

export const downloadSite = (company) => async (dispatch) => {
  const { data } = await publicFetch.get(`/company/download/${company}`, {
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf',
    },
  });
  const blob = new Blob([data], { type: 'application/pdf' });
  console.log(blob);
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${company}_proposal.pdf`;
  link.click();
};
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
export const setSigned = () => {
  return {
    type: SIGNED,
  };
};

export const setSignature = (signatureText, signatureImage) => async (
  dispatch
) => {
  const info = {
    signatureText: signatureText.signature,
    signatureImage,
  };
  console.log(info);
  const { data } = await publicFetch.put(
    `/company/${signatureText.name}`,
    info
  );
  dispatch({
    type: SET_SIGNATURE,
    payload: data,
  });
};
