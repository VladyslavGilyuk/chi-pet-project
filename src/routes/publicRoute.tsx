import { ROUTE_PATH } from '.';
import useUserAuth from '../hooks/useUserAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { isAuthenticated } = useUserAuth();
  return isAuthenticated ? <Navigate to={ROUTE_PATH.Home} /> : <Outlet />;
};

export default PublicRoute;
