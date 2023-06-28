import { createAction } from 'redux-actions';
import { SET_USER_INFO } from 'domains/user/data/store/actionTypes';

export const setCurrentValue = createAction(SET_USER_INFO);
