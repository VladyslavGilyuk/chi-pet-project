import { RootState } from '..';

export const tickets = (state: RootState) => state.tickets.tickets;
export const totalRows = (state: RootState) => state.tickets.totalRows;
