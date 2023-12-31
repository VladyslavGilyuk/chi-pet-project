import { ITicketState } from '../../types/tickets';
import { createSlice } from '@reduxjs/toolkit';
import { deleteTicketAsync, fetchTicketAsync, updateTicketAsync } from './thunk';
interface ITicketSliceState {
  tickets: ITicketState[];
  total: number;
  loading: boolean;
}

const initialState: ITicketSliceState = {
  tickets: [],
  total: 0,
  loading: false,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTicketAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTicketAsync.fulfilled, (state, action) => {
      if (action.payload) {
        state.loading = false;
        state.total = action.payload.totalCount;
        state.tickets = action.payload.data;
      }
    });
    builder.addCase(updateTicketAsync.fulfilled, (state, action) => {
      const updatedTicket = action.payload;
      const index = state.tickets.findIndex((t) => t.id === updatedTicket.id);

      if (index !== -1) {
        state.tickets[index] = updatedTicket;
      }
    });
    builder.addCase(deleteTicketAsync.fulfilled, (state, action) => {
      const deletedTicket = action.payload;
      state.tickets = state.tickets.filter((t) => t.id !== deletedTicket.id);
    });
  },
});
export default ticketsSlice.reducer;
