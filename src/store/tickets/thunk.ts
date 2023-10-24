import { Notify } from '../../utils/notify';
import TicketService from '../../service/TicketService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITickets, IUpdateTickets } from '../../types/tickets';

export const createTicketAsync = createAsyncThunk(
  'tickets/createTicket',
  async (data: ITickets) => {
    const transformedData = {
      ...data,
      createDate: new Date(),
      updatedDate: new Date(),
    };

    try {
      const response = await TicketService.register(transformedData);
      return response.data;
    } catch (error) {
      Notify('Ticket creation error');
    }
  },
);

export const updateTicketAsync = createAsyncThunk(
  'tickets/updateTicket',
  async ({ id, data }: { id: string; data: IUpdateTickets }) => {
    const transformedData = {
      ...data,
      updatedDate: new Date(),
    };

    try {
      await TicketService.patch(id, transformedData);
    } catch (error) {
      Notify('Error');
    }
  },
);

export const deleteTicketAsync = createAsyncThunk('tickets/deleteTicket', async (id: string) => {
  try {
    await TicketService.delete(id);
  } catch (error) {
    Notify('Error');
  }
});