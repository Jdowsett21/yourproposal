/* eslint-disable import/no-anonymous-default-export */
import {
  SIGNED,
  SET_COMPANY_INFO,
  SET_PAGE,
  SET_SIGNATURE,
} from '../actions/types';

const initialState = {
  name: '',
  color1: '#000',
  color2: '#333',
  page: 'intro',
  signatureImage: '',
  signatureText: '',
  dateSigned: '',
  ipAddress: '',
  signed: false,
  newBiz: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_INFO:
      return {
        ...state,
        name: action.payload.companyName.replace(/_/g, ' '),
        color1: action.payload.color1,
        color2: action.payload.color2,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SIGNED:
      return {
        ...state,
        signed: true,
      };
    case SET_SIGNATURE:
      return {
        ...state,
        signatureImage: action.payload.signatureImage,
        signatureText: action.payload.signatureText,
        dateSigned: action.payload.date,
        ipAddress: action.payload.ipAddress,
      };
    default:
      return state;
  }
};
