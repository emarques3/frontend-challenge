import { createSelector } from 'reselect';

export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, ({ name }) => name);
export const getUserEmail = createSelector(getUser, ({ email }) => email);
export const getFavoriteColor = createSelector(getUser, ({ favoriteColor }) => favoriteColor);
export const getAgreedToTerms = createSelector(getUser, ({ agreedToTerms }) => agreedToTerms);
