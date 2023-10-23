import { ITickets } from '../types/tickets';
import axios from './axiosConfig';

class TicketService {
  get() {
    return axios.get('/tickets');
  }
  register(body: ITickets) {
    return axios.post('/tickets', body);
  }
}

export default new TicketService();
