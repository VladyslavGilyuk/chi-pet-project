import { ROUTE_PATH } from '../routes';
import { setUser } from '../store/user/slice';
import { useAppDispatch } from '../store/hooks';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const dispatch = useAppDispatch();
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : false;
  dispatch(setUser(user));

  return user.token ? <Outlet /> : <Navigate to={ROUTE_PATH.SingIn} />;
};

export default PrivateRoute;
