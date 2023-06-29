import { createSelector } from 'reselect';

export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, ({ name }) => name);
export const getUserEmail = createSelector(getUser, ({ email }) => email);
export const getUserPassword = createSelector(getUser, ({ password }) => password);
export const getFavoriteColor = createSelector(getUser, ({ favoriteColor }) => favoriteColor);
export const getAgreedToTerms = createSelector(getUser, ({ agreedToTerms }) => agreedToTerms);
export const getLoading = createSelector(getUser, ({ loading }) => loading);
