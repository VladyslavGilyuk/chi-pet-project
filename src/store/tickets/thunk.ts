import { Notify } from '../../utils/notify';
import TicketService from '../../service/TicketService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ITickets, IUpdateTickets } from '../../types/tickets';

export const fetchTicketAsync = createAsyncThunk('tickets/fetchTicket', async (apiUrl: string) => {
  try {
    const response = await TicketService.getAll(apiUrl);
    const data = response.data;
    const totalCount = parseInt(response.headers['x-total-count']);

    return { data, totalCount };
  } catch (error) {
    Notify('Ticket creation error');
  }
});
export const createTicketAsync = createAsyncThunk(
  'tickets/createTicket',
  async (data: ITickets) => {
    const transformedData = {
      ...data,
      createdBy: {
        name: 'userName',
        imageUrl: 'profilePhoto1.png',
        id: uuidv4(),
      },
      createDate: new Date(),
      updatedDate: new Date(),
    };

    try {
      const response = await TicketService.create(transformedData);
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
      const response = await TicketService.update(id, transformedData);
      return response.data;
    } catch (error) {
      Notify('Error');
    }
  },
);

export const deleteTicketAsync = createAsyncThunk('tickets/deleteTicket', async (id: string) => {
  try {
    const response = await TicketService.delete(id);
    return response;
  } catch (error) {
    Notify('Error');
  }
});
