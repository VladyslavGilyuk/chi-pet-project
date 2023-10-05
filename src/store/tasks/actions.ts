import { ITaskState } from '../../types/tasks';
import { PayloadAction } from '@reduxjs/toolkit';

export const setNewLabel = (state: ITaskState, action: PayloadAction<string>) => {
  state.label = action.payload;
};

export const setSelectedStatus = (state: ITaskState, action: PayloadAction<string>) => {
  state.status = action.payload;
};

export const setModalOpen = (state: ITaskState, action: PayloadAction<boolean>) => {
  state.modal = action.payload;
};

export const setAddingTask = (state: ITaskState, action: PayloadAction<boolean>) => {
  state.addingTask = action.payload;
};
