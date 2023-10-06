import { PayloadAction } from '@reduxjs/toolkit';
import { ITask, ITasksState, ToggleTaskPayload } from '../../types/tasks';

export const addTaskReducer = (state: ITasksState, action: PayloadAction<ITask>) => {
  state.tasks.push(action.payload);
};

export const toggleTaskReducer = (state: ITasksState, action: PayloadAction<ToggleTaskPayload>) => {
  const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
  if (taskIndex !== -1) {
    state.tasks[taskIndex].checked = !state.tasks[taskIndex].checked;
  }
};
