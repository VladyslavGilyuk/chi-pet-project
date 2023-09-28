import LogoImage from '../../components/common/logoImage';
import { Outlet } from 'react-router-dom';
import OverviewIcon from '../../components/common/icons/overview';
import TicketsIcon from '../../components/common/icons/tickets';
import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeadingText,
  LayoutWrapper,
  LinksWrapper,
  StyledDivider,
  StyledLink,
} from './styled';

const Layout: React.FC = () => {
  const location = useLocation();
  interface INavLinks {
    icon: React.ReactElement;
    to: string;
    name: string;
    divider?: React.ReactElement;
  }
  const links: INavLinks[] = [
    {
      icon: <OverviewIcon />,
      to: '/',
      name: 'Overview',
    },
    {
      icon: <TicketsIcon />,
      to: '/tickets',
      name: 'Tickets',
    },
    {
      icon: <OverviewIcon />,
      to: '/ideas',
      name: 'Ideas',
    },
    {
      icon: <OverviewIcon />,
      to: '/contacts',
      name: 'Contacts',
    },
    {
      icon: <OverviewIcon />,
      to: '/agents',
      name: 'Agents',
    },
    {
      icon: <OverviewIcon />,
      to: '/articles',
      name: 'Articles',
    },
    {
      divider: <StyledDivider />,
      icon: <OverviewIcon />,
      to: '/settings',
      name: 'Settings',
    },
    {
      icon: <OverviewIcon />,
      to: '/subscription',
      name: 'Subscription',
    },
  ];
  return (
    <>
      <LayoutWrapper>
        <HeaderWrapper>
          <LogoImage />
          <HeadingText variant='h3'>Dashboard Kit</HeadingText>
        </HeaderWrapper>
        {links.map((link) => (
          <div key={link.name}>
            {link.divider}
            <LinksWrapper className={location.pathname === link.to ? 'isActive' : ''}>
              {link.icon}
              <StyledLink to={link.to} className={location.pathname === link.to ? 'isActive' : ''}>
                {link.name}
              </StyledLink>
            </LinksWrapper>
          </div>
        ))}
      </LayoutWrapper>

      <Outlet />
    </>
  );
};

export default Layout;
