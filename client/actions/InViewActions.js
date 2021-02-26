import { SET_MENU_VIEW } from './types';

export const setNavOpen = (open) => {
  return {
    type: SET_MENU_VIEW,
    payload: open,
  };
};
