import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/slice';
export interface UserState {
  user: {
    email: string;
    token: string;
  };
}
export interface RootState {
  user: UserState;
}
export const store = configureStore<RootState>({
  reducer: {
    user: userReducer,
  },
});
