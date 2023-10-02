import Header from '../../components/header';
import NavBar from '../../components/navBar';
import { Outlet } from 'react-router-dom';
import { Container, ContentContainer } from './styled';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <ContentContainer>
        <Header />
        <main>
          <Outlet />
        </main>
      </ContentContainer>
    </Container>
  );
};

export default Layout;
