import { ROUTE_PATH } from '../routes';
import useUserAuth from '../hooks/useUserAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuth } = useUserAuth();
  return isAuth ? <Outlet /> : <Navigate to={ROUTE_PATH.SignIn} />;
};

export default PrivateRoute;
