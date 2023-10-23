import { ITickets } from '../../types/tickets';
import { Notify } from '../../utils/notify';
import TicketService from '../../service/TicketService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createTicketAsync = createAsyncThunk(
  'tickets/createTicket',
  async (data: ITickets) => {
    const transformedData = {
      ...data,
      createDate: new Date(),
      updatedDate: new Date(),
    };

    return TicketService.register(transformedData)
      .then((response) => {
        const responseData = response.data;
        return responseData;
      })
      .catch(() => {
        Notify('Ticket creation error');
      });
  },
);
