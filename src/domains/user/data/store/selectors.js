import { createSelector } from 'reselect';

export const getUser = (state) => state.user;

export const getUserName = createSelector(getUser, ({ name }) => name);
