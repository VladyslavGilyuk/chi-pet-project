import { ITasksState } from '../../types/tasks';
import { tasks } from '../../utils/mockData';
import { v4 as uuidv4 } from 'uuid';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ITasksState = {
  tasks,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string; tag: string }>) => {
      state.tasks.push({
        text: action.payload.text,
        tag: action.payload.tag,
        checked: false,
        id: uuidv4(),
      });
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
  },
});

export const { addTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
