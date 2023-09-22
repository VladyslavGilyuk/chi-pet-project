import axios from './axiosService';
import { ISignIn, ISignUp } from '../types/auth';

class UserService {
  login(body: ISignIn) {
    return axios.post('/login', body);
  }
  register(body: ISignUp) {
    return axios.post('/register', body);
  }
}

export default new UserService();
