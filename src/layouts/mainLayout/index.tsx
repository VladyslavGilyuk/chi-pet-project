import Header from '../../components/header';
import NavBar from '../../components/navBar';
import { Outlet } from 'react-router-dom';
import { Container, ContentWrapper } from './styled';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
