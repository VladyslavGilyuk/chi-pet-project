import OverviewIcon from '../../components/common/icons/overview';
import { ROUTE_PATH } from '../../routes';
import { StyledDivider } from './styled';
import TicketsIcon from '../../components/common/icons/tickets';

interface INavLinks {
  icon: React.ReactElement;
  to: string;
  name: string;
  divider?: React.ReactElement;
}

export const links: INavLinks[] = [
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Overview',
  },
  {
    icon: <TicketsIcon />,
    to: ROUTE_PATH.Tickets,
    name: 'Tickets',
  },
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Ideas',
  },
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Contacts',
  },
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Agents',
  },
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Articles',
  },
  {
    divider: <StyledDivider />,
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Settings',
  },
  {
    icon: <OverviewIcon />,
    to: ROUTE_PATH.Home,
    name: 'Subscription',
  },
];
