import {
  EMAIL_SUCCESS,
  EMAIL_FAILURE,
  APPLICATION_SUCCESS,
  APPLICATION_FAILURE,
  REDIRECT_ON_SUCCESS,
} from './types';
import { publicFetch } from '../utils/publicFetch';

export const submitEmail = (info) => async (dispatch) => {
  try {
    const { data } = publicFetch.post('/emails/', info);
    dispatch({
      type: EMAIL_SUCCESS,
      payload: data,
    });

    setTimeout(() => {
      return {
        type: REDIRECT_ON_SUCCESS,
      };
    }, 700);
  } catch (err) {
    dispatch({
      type: EMAIL_FAILURE,
      payload: err.data.errorMessage,
    });
  }
};

export const submitApplication = (info) => async (dispatch) => {
  try {
    const { data } = publicFetch.post('/emails/application', info);
    dispatch({
      type: APPLICATION_SUCCESS,
      payload: data,
    });
    console.log(data);
    setTimeout(() => {
      return {
        type: REDIRECT_ON_SUCCESS,
      };
    }, 700);
  } catch (err) {
    dispatch({
      type: APPLICATION_FAILURE,
      payload: err.data.errorMessage,
    });
  }
};
