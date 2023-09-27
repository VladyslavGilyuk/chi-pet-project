import axios from './axiosConfig';
import { ISignIn, ISignUpAsync } from '../types/auth';

class UserService {
  login(body: ISignIn) {
    return axios.post('/login', body);
  }
  register(body: ISignUpAsync) {
    return axios.post('/register', body);
  }
}

export default new UserService();
