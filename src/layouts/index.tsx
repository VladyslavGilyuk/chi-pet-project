import Header from '../components/header';
import NavBar from '../components/navBar';
import { Outlet } from 'react-router-dom';
import { Container, ContentWrapper, GlobalStyle, NavBarWrapper } from './styled';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
      <GlobalStyle />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
    </Container>
  );
};

export default Layout;
