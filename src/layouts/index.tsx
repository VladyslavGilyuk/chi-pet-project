import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
