// eslint-disable-next-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import { createAction } from 'redux-actions';
import {
  RESET,
  SET_COLOR,
  SET_LOADING,
  SET_TERMS_AGREEMENT,
  SET_USER_INFO,
} from 'domains/user/data/store/actionTypes';

export const setUserInfo = createAction(SET_USER_INFO);
export const setColor = createAction(SET_COLOR);
export const setLoading = createAction(SET_LOADING);
export const setTerms = createAction(SET_TERMS_AGREEMENT);
export const reset = createAction(RESET);
