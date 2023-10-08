import { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ITaskInput, ITasksState } from '../../types/tasks';

export const addTaskReducer = (state: ITasksState, action: PayloadAction<ITaskInput>) => {
  state.tasks.push({
    text: action.payload.text,
    tag: action.payload.tag,
    checked: false,
    id: uuidv4(),
  });
};

export const toggleTaskReducer = (state: ITasksState, action: PayloadAction<string>) => {
  const taskIndex = state.tasks.findIndex((task) => task.id === action.payload);
  if (taskIndex !== -1) {
    state.tasks[taskIndex].checked = !state.tasks[taskIndex].checked;
  }
};
