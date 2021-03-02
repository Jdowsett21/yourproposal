import {
  SIGNED,
  SET_COMPANY_INFO,
  SET_SIGNATURE,
  SET_PAGE,
  ANALYZE,
  OPTIONS,
} from './types';
import { publicFetch } from '../utils/publicFetch';

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

export const setAnalyze = (companyName) => async (dispatch) => {
  const { data } = await publicFetch.put(`/company/analyze/${companyName}`);
  dispatch({
    type: ANALYZE,
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
  const name = signatureText.name.replace(/\s+/g, '_');
  const info = {
    signatureText: signatureText.signature,
    signatureImage,
  };

  const { data } = await publicFetch.put(`/company/${name}`, info);
  dispatch({
    type: SET_SIGNATURE,
    payload: data,
  });
};
