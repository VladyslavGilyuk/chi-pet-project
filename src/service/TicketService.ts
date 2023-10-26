import axios from './axiosConfig';
import { IPatchTickets, ITickets } from '../types/tickets';

class TicketService {
  get(queryParams = '') {
    return axios.get(`/tickets${queryParams}`);
  }

  register(body: ITickets) {
    return axios.post('/tickets', body);
  }
  patch(id: string, data: IPatchTickets) {
    return axios.patch(`/tickets/${id}`, data);
  }
  delete(id: string) {
    return axios.delete(`/tickets/${id}`);
  }
}

export default new TicketService();
