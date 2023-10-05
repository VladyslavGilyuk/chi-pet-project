import * as taskActions from './actions';
import { ITasksState } from '../../types/tasks';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITasksState = {
  label: '',
  status: 'Default',
  modal: false,
  addingTask: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setNewLabel: taskActions.setNewLabel,
    setSelectedStatus: taskActions.setSelectedStatus,
    setAddingTask: taskActions.setAddingTask,
  },
});

export const { setNewLabel, setSelectedStatus, setAddingTask } = tasksSlice.actions;

export default tasksSlice.reducer;
