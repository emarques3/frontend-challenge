import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'domains/user/data/store/reducer';
import { colorsReducer } from 'domains/settings/data/store/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    color: colorsReducer,
  },
});
