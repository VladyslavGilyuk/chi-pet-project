import Header from '../components/header';
import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';
import { Container, ContentWrapper, GlobalStyle } from './styled';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
