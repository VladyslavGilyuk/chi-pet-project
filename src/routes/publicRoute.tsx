import { ROUTE_PATH } from '.';
import useUserAuth from '../hooks/useUserAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { isAuth } = useUserAuth();
  return isAuth ? <Navigate to={ROUTE_PATH.Home} /> : <Outlet />;
};

export default PublicRoute;
