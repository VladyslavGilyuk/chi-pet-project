import '@testing-library/jest-dom/extend-expect';
import ContactsTable from './index';
import { render, screen } from '@testing-library/react';

// Mock the useDispatch and useSelector hooks
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the necessary modules and components
jest.mock('../../../store/contacts/selector', () => ({
  contactsStore: jest.fn(),
}));
jest.mock('../../common/table', () => ({
  __esModule: true,
  EFormType: {
    Contacts: 'Contacts',
    Tickets: 'Tickets',
  },
  default: () => <div data-testid='contacts_table'>MockTable</div>,
}));
jest.mock('./helper', () => ({
  columns: [],
  sortingOptions: [],
}));
jest.mock('../../../store/contacts/thunk', () => ({
  fetchContactAsync: jest.fn(),
  deleteContactAsync: jest.fn(),
}));
jest.mock('../../modals/addEditContact', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditContact'>MockAddEditContact</div>,
}));

describe('ContactsTable component', () => {
  test('Should render Contacts Table', () => {
    render(<ContactsTable />);
    expect(screen.getByTestId('contacts_table')).toBeInTheDocument();
  });
});
