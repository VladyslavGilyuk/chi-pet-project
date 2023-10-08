import { ITasksState } from '../../types/tasks';
import { createSlice } from '@reduxjs/toolkit';
import { tasks } from '../../utils/mockData';
import { addTaskReducer, toggleTaskReducer } from './actions';

const initialState: ITasksState = {
  tasks,
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
