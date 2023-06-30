import { configureStore } from '@reduxjs/toolkit';
import { colorsReducer } from 'domains/settings/data/store/reducer';
import { userReducer } from 'domains/user/data/store/reducer';

export const store = configureStore({
  reducer: {
    color: colorsReducer,
    user: userReducer,
  },
});

export function createTestStore() {
  return store;
}
