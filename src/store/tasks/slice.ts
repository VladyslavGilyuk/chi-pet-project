import * as taskActions from './actions';
import { ITaskState } from '../../types/tasks';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITaskState = {
  label: '',
  status: 'Default',
  modal: false,
  addingTask: false,
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setNewLabel: taskActions.setNewLabel,
    setSelectedStatus: taskActions.setSelectedStatus,
    setModalOpen: taskActions.setModalOpen,
    setAddingTask: taskActions.setAddingTask,
  },
});

export const { setNewLabel, setSelectedStatus, setModalOpen, setAddingTask } = taskSlice.actions;

export default taskSlice.reducer;
