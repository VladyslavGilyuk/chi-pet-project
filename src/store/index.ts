import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
