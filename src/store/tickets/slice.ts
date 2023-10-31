import { ITicketState } from '../../types/tickets';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ITicketState[] = [];

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTicketState: (state, action: PayloadAction<ITicketState[]>) => {
      return action.payload;
    },
    updateTicket: (state, action: PayloadAction<{ id: ITicketState }>) => {
      const updatedTicket = action.payload.id;
      const index = state.findIndex((t) => t.id === updatedTicket.id);
      state[index] = updatedTicket;
    },
    deleteTicket: (state, action: PayloadAction<{ id: string }>) => {
      const deleteTicket = action.payload.id;
      state = state.filter((t) => t.id !== deleteTicket);
    },
  },
});
export const { setTicketState, updateTicket, deleteTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;
