import { ITickets } from '../../types/tickets';
import { Notify } from '../../utils/notify';
import TicketService from '../../service/TicketService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
