import { ROUTE_PATH } from '../routes';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const userJSON = localStorage.getItem('user');
  const user = userJSON ? JSON.parse(userJSON) : false;

  return user.token ? <Navigate to={ROUTE_PATH.Home} /> : <Outlet />;
};

export default PublicRoute;
