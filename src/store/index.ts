import { RootState } from '../types/user';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';

export const store = configureStore<RootState>({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
