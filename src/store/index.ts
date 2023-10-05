import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
