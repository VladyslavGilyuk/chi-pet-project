import { ReactComponent as AgentsIcon } from '../../assets/agents.svg';
import { ReactComponent as ArticlesIcon } from '../../assets/articles.svg';
import { ReactComponent as ContactsIcon } from '../../assets/contacts.svg';
import { ReactComponent as IdeasIcon } from '../../assets/ideas.svg';
import { ReactComponent as OverviewIcon } from '../../assets/overview.svg';
import { ROUTE_PATH } from '../../routes';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { StyledDivider } from './styled';
import { ReactComponent as SubscriptionIcon } from '../../assets/subscription.svg';
import { ReactComponent as TicketsIcon } from '../../assets/tickets.svg';

export interface INavLinks {
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
    icon: <IdeasIcon />,
    to: ROUTE_PATH.Ideas,
    name: 'Ideas',
  },
  {
    icon: <ContactsIcon />,
    to: ROUTE_PATH.Contacts,
    name: 'Contacts',
  },
  {
    icon: <AgentsIcon />,
    to: ROUTE_PATH.Agents,
    name: 'Agents',
  },
  {
    icon: <ArticlesIcon />,
    to: ROUTE_PATH.Articles,
    name: 'Articles',
  },
  {
    divider: <StyledDivider />,
    icon: <SettingsIcon />,
    to: ROUTE_PATH.Settings,
    name: 'Settings',
  },
  {
    icon: <SubscriptionIcon />,
    to: ROUTE_PATH.Subscription,
    name: 'Subscription',
  },
];
