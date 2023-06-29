import { createSelector } from 'reselect';

export const getColors = (state) => state.color;

export const getColorsArray = createSelector(getColors, ({ colorsArray }) => colorsArray);
export const getColorsLoading = createSelector(getColors, ({ loading }) => loading);
