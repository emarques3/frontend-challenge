import { createAction } from 'redux-actions';
import { SET_USER_INFO, SET_COLOR, SET_TERMS_AGREEMENT } from 'domains/user/data/store/actionTypes';

export const setUserInfo = createAction(SET_USER_INFO);
export const setColor = createAction(SET_COLOR);
export const setTerms = createAction(SET_TERMS_AGREEMENT);
