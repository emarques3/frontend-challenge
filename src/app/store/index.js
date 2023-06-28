import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'domains/user/data/store/reducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
