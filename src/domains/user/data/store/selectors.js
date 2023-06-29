import { createSelector } from 'reselect';

export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, ({ name }) => name);
export const getUserEmail = createSelector(getUser, ({ email }) => email);
export const getChosenColor = createSelector(getUser, ({ chosenColor }) => chosenColor);
export const getAgreedToTerms = createSelector(getUser, ({ agreedToTerms }) => agreedToTerms);
