import { setUser } from '../store/user/slice';
import { useAppDispatch } from '../store/hooks';

const useUserAuth = () => {
  const dispatch = useAppDispatch();

  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : false;
  const isAuthenticated = Boolean(user.token);
  dispatch(setUser(user));

  return {
    isAuthenticated,
  };
};

export default useUserAuth;
