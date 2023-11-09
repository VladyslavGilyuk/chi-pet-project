import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const tickets = (state: RootState) => state.tickets.tickets;
export const total = (state: RootState) => state.tickets.total;
export const ticketsStore = createSelector([tickets, total], (storeItems, storeTotal) => ({
  storeItems,
  storeTotal,
}));
