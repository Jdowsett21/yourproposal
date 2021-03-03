/* eslint-disable import/no-anonymous-default-export */
import {
  SIGNED,
  OPTIONS,
  SET_COMPANY_INFO,
  SET_PAGE,
  ANALYZE,
  SET_SIGNATURE,
} from '../actions/types';

const initialState = {
  name: '',
  color1: '#000',
  analyze: false,
  color2: '#333',
  page: 'home',
  signatureImage: '',
  signatureText: '',
  dateSigned: '',
  ipAddress: '',
  signed: '',
  noWebsite: '',
  averageSalePrice: 1,
  conversionRate: 1,
  numberOfLeads: 1,
  conversionOfLeads: 1,
  analyze: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANALYZE:
      return {
        ...state,
        analyze: action.payload.analyze,
      };
    case OPTIONS:
      return {
        options: !state.options,
      };
    case SET_COMPANY_INFO:
      return {
        ...state,
        name: action.payload.companyName.replace(/_/g, ' '),
        color1: action.payload.color1,
        color2: action.payload.color2,
        signatureImage: action.payload.signatureImage,
        signed: action.payload.signed,
        signatureText: action.payload.signatureText,
        dateSigned: action.payload.date,
        ipAddress: action.payload.ipAddress,
        noWebsite: action.payload.noWebsite,
        averageSalePrice: action.payload.averageSalePrice,
        conversionRate: action.payload.conversionRate,
        conversionOfLeads: action.payload.conversionOfLeads,
        numberOfLeads: action.payload.numberOfLeads,
        analyze: action.payload.analyze,
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
