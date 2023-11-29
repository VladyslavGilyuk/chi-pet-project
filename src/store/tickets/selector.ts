import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const tickets = (state: RootState) => state.tickets.tickets;
export const total = (state: RootState) => state.tickets.total;
export const isLoading = (state: RootState) => state.tickets.loading;
export const ticketsStore = createSelector(
  [tickets, total, isLoading],
  (data, total, isLoading) => ({
    data,
    total,
    isLoading,
  }),
);
