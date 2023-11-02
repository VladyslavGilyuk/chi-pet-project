import axios from './axiosConfig';
import { IPatchTickets, ITickets } from '../types/tickets';

class TicketService {
  getAll(queryParams = '') {
    return axios.get(`/tickets${queryParams}`);
  }

  create(body: ITickets) {
    return axios.post('/tickets', body);
  }
  update(id: string, data: IPatchTickets) {
    return axios.patch(`/tickets/${id}`, data);
  }
  delete(id: string) {
    return axios.get(`/tickets/${id}`).then((response) => {
      return axios.delete(`/tickets/${id}`).then(() => response.data);
    });
  }
}

export default new TicketService();
