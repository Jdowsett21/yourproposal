/* eslint-disable import/no-anonymous-default-export */
import { SET_MENU_VIEW } from '../actions/types';

const initialState = {
  navOpen: false,
  id: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_VIEW:
      return {
        ...state,
        navOpen: action.payload,
      };

    default:
      return state;
  }
};
