import LogoImage from '../../components/common/logoImage';
import { HeaderWrapper, HeadingText, LayoutWrapper, StyledDivider } from './styled';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <LayoutWrapper>
        <HeaderWrapper>
          <LogoImage />
          <HeadingText variant='h3'>Dashboard Kit</HeadingText>
        </HeaderWrapper>
        <Link to='/'>Overview</Link>
        <Link to='tickets'>Tickets</Link>
        <Link to='ideas'>Ideas</Link>
        <Link to='contacts'>Contacts</Link>
        <Link to='agents'>Agents</Link>
        <Link to='articles'>Articles</Link>
        <StyledDivider />
        <Link to='settings'>Settings</Link>
        <Link to='subscription'>Subscription</Link>
      </LayoutWrapper>
      <Outlet />
    </>
  );
};

export default Layout;
