import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/slice';
import ticketsReducer from './tickets/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    tickets: ticketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
