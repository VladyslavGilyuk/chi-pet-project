import { ITasksState } from '../../types/tasks';
import { createSlice } from '@reduxjs/toolkit';
import { addTaskReducer, toggleTaskReducer } from './actions';

const initialState: ITasksState = {
  tasks: [
    {
      id: '1',
      text: 'Delete ticket',
      tag: 'Urgent',
      checked: false,
    },
    {
      id: '2',
      text: 'Redisign ticket',
      tag: 'New',
      checked: false,
    },

    {
      id: '3',
      text: 'Update ticket report',
      tag: 'Default',
      checked: true,
    },
    {
      id: '4',
      text: 'Create new ticket example',
      tag: 'New',
      checked: false,
    },
    {
      id: '5',
      text: 'Finish ticket update',
      tag: 'Urgent',
      checked: false,
    },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: addTaskReducer,
    toggleTask: toggleTaskReducer,
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
