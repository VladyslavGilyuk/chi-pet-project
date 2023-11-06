import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import tasksReducer from './tasks/slice';
import ticketsReducer from './tickets/slice';
import userReducer from './user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    tickets: ticketsReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
