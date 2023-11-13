import { IUserState } from '../../types/user';
import { Notify } from '../../utils/notify';
import TicketService from '../../service/TicketService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITickets, IUpdateTickets } from '../../types/tickets';

export const fetchTicketAsync = createAsyncThunk('tickets/fetchTicket', async (apiUrl: string) => {
  try {
    const response = await TicketService.getAll(apiUrl);
    const data = response.data;
    const totalCount = parseInt(response.headers['x-total-count']);

    return { data, totalCount };
  } catch (error) {
    Notify('Something went wrong');
  }
});
export const createTicketAsync = createAsyncThunk(
  'tickets/createTicket',
  async (
    { apiUrl, data, user }: { apiUrl: string; data: ITickets; user: IUserState },
    thunkAPI,
  ) => {
    const { dispatch } = thunkAPI;

    const transformedData = {
      ...data,
      createdBy: {
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: 'profilePhoto1.png',
        id: user.id?.toString(),
      },
      createDate: new Date(),
      updatedDate: new Date(),
    };

    try {
      const response = await TicketService.create(transformedData);
      await dispatch(fetchTicketAsync(apiUrl));
      return response.data;
    } catch (error) {
      Notify('Something went wrong');
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
      Notify('Something went wrong');
    }
  },
);

export const deleteTicketAsync = createAsyncThunk(
  'tickets/deleteTicket',
  async ({ id, apiUrl }: { id: string; apiUrl: string }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await TicketService.delete(id);
      await dispatch(fetchTicketAsync(apiUrl));
      return response;
    } catch (error) {
      Notify('Something went wrong');
    }
  },
);
