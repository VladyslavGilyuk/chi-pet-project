import { ITasksState } from '../../types/tasks';
import { PayloadAction } from '@reduxjs/toolkit';

export const setNewLabel = (state: ITasksState, action: PayloadAction<string>) => {
  state.label = action.payload;
};

export const setSelectedStatus = (state: ITasksState, action: PayloadAction<string>) => {
  state.status = action.payload;
};

export const setModalOpen = (state: ITasksState, action: PayloadAction<boolean>) => {
  state.modal = action.payload;
};

export const setAddingTask = (state: ITasksState, action: PayloadAction<boolean>) => {
  state.addingTask = action.payload;
};
