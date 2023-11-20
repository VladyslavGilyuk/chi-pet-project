import '@testing-library/jest-dom/extend-expect';
import TicketsTable from './index';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../store/tickets/selector', () => ({
  ticketsStore: jest.fn(),
}));
jest.mock('../../common/table', () => ({
  __esModule: true,
  EFormType: {
    Contacts: 'Contacts',
    Tickets: 'Tickets',
  },
  default: () => <div data-testid='tickets_table'>MockTable</div>,
}));
jest.mock('./helper', () => ({
  columns: [],
  sortingOptions: [],
}));
jest.mock('../../../store/tickets/thunk', () => ({
  fetchTicketAsync: jest.fn(),
  deleteTicketAsync: jest.fn(),
}));
jest.mock('../../modals/addEditTicket', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditTicket'>MockAddEditTicket</div>,
}));

describe('TicketsTable component', () => {
  test('Should render Tickets Table', () => {
    render(<TicketsTable />);
    expect(screen.getByTestId('tickets_table')).toBeInTheDocument();
  });
});
