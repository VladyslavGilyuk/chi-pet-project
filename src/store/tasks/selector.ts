import { RootState } from '..';
import { createSelector } from 'reselect';

export const tasks = (state: RootState) => state.tasks.tasks;

export const visibleTasks = createSelector([tasks], (tasks) => tasks.slice(-3).reverse());
export const modalTasks = createSelector([tasks], (tasks) => [...tasks].reverse());
