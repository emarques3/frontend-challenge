import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { colorsReducer } from 'domains/settings/data/store/reducer';
import { userReducer } from 'domains/user/data/store/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  color: colorsReducer,
});

/**
 *  Configures a customizable store using the `rootReducer`.
 *  @param `preloadedState` the object containing any desired customization on the state.
 *  @returns the store object.
 */
export const setupStore = (preloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();
