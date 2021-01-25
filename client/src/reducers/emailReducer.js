/* eslint-disable import/no-anonymous-default-export */
import {
  EMAIL_SUCCESS,
  EMAIL_FAILURE,
  APPLICATION_SUCCESS,
  APPLICATION_FAILURE,
  REDIRECT_ON_SUCCESS,
  PROJECT,
} from '../actions/types';

const initialState = {
  emailSuccess: false,
  emailFailure: false,
  applicationSuccess: false,
  applicationFailure: false,
  project: 'cleanSoils',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SUCCESS:
      return {
        ...state,
        emailSuccess: true,
      };
    case EMAIL_FAILURE:
      return {
        ...state,
        emailFailure: true,
      };
    case APPLICATION_SUCCESS:
      return {
        ...state,
        applicationSuccess: true,
      };
    case APPLICATION_FAILURE:
      return {
        ...state,
        applicationFailure: true,
      };

    default:
      return state;
  }
};
