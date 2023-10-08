import { createAction } from '@reduxjs/toolkit';
import { IAddTaskPayload, IToggleTaskPayload } from '../../types/tasks';

export const addTask = createAction(
  'tasks/addTask',
  (text: string, tag: string): { payload: IAddTaskPayload } => ({
    payload: {
      text,
      tag,
    },
  }),
);

export const toggleTask = createAction(
  'tasks/toggleTask',
  (id: string): { payload: IToggleTaskPayload } => ({
    payload: {
      id,
    },
  }),
);
