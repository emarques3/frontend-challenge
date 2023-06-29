import { createAction } from 'redux-actions';
import {
  RESET,
  SET_COLOR,
  SET_TERMS_AGREEMENT,
  SET_USER_INFO,
} from 'domains/user/data/store/actionTypes';

export const setUserInfo = createAction(SET_USER_INFO);
export const setColor = createAction(SET_COLOR);
export const setTerms = createAction(SET_TERMS_AGREEMENT);
export const reset = createAction(RESET);
