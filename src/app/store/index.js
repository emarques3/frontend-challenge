import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { colorsReducer } from 'domains/settings/data/store/reducer';
import { userReducer } from 'domains/user/data/store/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  color: colorsReducer,
});

// TODO: find out how to override props while bootstrapping with default ones
export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();
