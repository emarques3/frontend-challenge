import { createAction } from 'redux-actions';
import { SET_COLORS, SET_COLORS_LOADING } from 'domains/settings/data/store/actionTypes';

export const setColorsArray = createAction(SET_COLORS);
export const setColorsLoading = createAction(SET_COLORS_LOADING);
