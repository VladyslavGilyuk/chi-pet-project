import { setUser } from '../store/user/slice';
import { useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';

const useUserAuth = () => {
  const dispatch = useAppDispatch();

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    user && dispatch(setUser(user));
  }, [dispatch, user]);

  return {
    isAuth: !!user?.token,
  };
};

export default useUserAuth;
