import axios from './axiosConfig';
import { IContacts, IPatchContacts } from '../types/contacts';

class ContactsService {
  getAll(queryParams = '') {
    return axios.get(`/contacts${queryParams}`);
  }

  create(body: IContacts) {
    return axios.post('/contacts', body);
  }
  update(id: string, data: IPatchContacts) {
    return axios.patch(`/contacts/${id}`, data);
  }
  delete(id: string) {
    return axios.get(`/contacts/${id}`).then((response) => {
      return axios.delete(`/contacts/${id}`).then(() => response.data);
    });
  }
}

export default new ContactsService();
