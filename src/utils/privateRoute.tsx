import { ROUTE_PATH } from '../routes';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : false;

  return user.token ? <Outlet /> : <Navigate to={ROUTE_PATH.SingIn} />;
};

export default PrivateRoute;
