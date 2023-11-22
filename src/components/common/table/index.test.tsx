/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { fetchContactAsync } from '../../../store/contacts/thunk';
import Table, { EFormType } from './index';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

jest.mock('@mui/x-date-pickers/internals/demo', () => ({
  DemoContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='mocked_demo_container'>{children}</div>
  ),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useAppDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('./useTable', () => ({
  __esModule: true,
  useTable: () => ({
    ...jest.requireActual('./useTable'),
    searchParams: new URLSearchParams(),
    data: [
      { id: '1', ticket: 'firstRow' },
      { id: '2', ticket: 'SecondRow' },
    ],
    total: 2,
    selectedPriorities: [],
    setSelectedPriorities: jest.fn(),
    paginationModel: {
      pageSize: 8,
      page: 0,
    },
    setPaginationModel: jest.fn(),
    handleUpdateItem: jest.fn(),
    handleRemoveItem: jest.fn(),
    selectedItem: {},
  }),
}));

const mockData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];
const store = configureStore({
  reducer: {
    contacts: () => ({
      contacts: mockData,
      total: 2,
    }),
    users: () => ({
      token: '',
      email: '',
      firstName: '',
      lastName: '',
      id: null,
    }),
  },
});

const mockStoreData = { data: mockData, total: mockData.length } as any;
const mockFetchAction = jest.fn() as any;
const mockDeleteAction = jest.fn() as any;

const mockColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
];
const mockSortingOptions = [{ label: 'Name', value: 'name' }];
const mockPriorityOptions = ['High', 'Medium', 'Low'];

describe('Table component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });
  test('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={mockFetchAction}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Contacts}
          />
          ,
        </Provider>
        ,
      </BrowserRouter>,
    );
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
  test('renders with the correct number of rows', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={fetchContactAsync}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Contacts}
          />
          ,
        </Provider>
        ,
      </BrowserRouter>,
    );

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
  });
  test('renders with the correct columns', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={mockFetchAction}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Contacts}
          />
          ,
        </Provider>
        ,
      </BrowserRouter>,
    );

    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells.length).toBe(3);
  });
  test('renders with the correct toolbar', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={mockFetchAction}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Contacts}
          />
          ,
        </Provider>
        ,
      </BrowserRouter>,
    );

    const customToolbar = screen.getByTestId('custom_toolbar');
    expect(customToolbar).toBeInTheDocument();
  });

  test('renders AddEditContact when isModalOpen is true for Contacts form type', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={mockFetchAction}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Contacts}
          />
        </Provider>
        ,
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByTestId('add_button'));

    await waitFor(() => {
      expect(screen.getByTestId('contact_modal')).toBeInTheDocument();
      expect(screen.queryByTestId('ticket_modal')).not.toBeInTheDocument();
    });
    fireEvent.click(screen.getByText('Cancel'));

    await waitFor(() => {
      expect(screen.queryByTestId('contact_modal')).not.toBeInTheDocument();
      expect(screen.queryByTestId('ticket_modal')).not.toBeInTheDocument();
    });
  });
  test('renders AddEditTicket when formType is not Contacts', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Table
            storeData={mockStoreData}
            fetchAction={mockFetchAction}
            deleteAction={mockDeleteAction}
            columns={mockColumns}
            sortingOptions={mockSortingOptions}
            priorityOptions={mockPriorityOptions}
            formType={EFormType.Tickets}
          />
        </Provider>
        ,
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId('add_button'));

    await waitFor(() => {
      expect(screen.getByTestId('ticket_modal')).toBeInTheDocument();
      expect(screen.queryByTestId('contact_modal')).not.toBeInTheDocument();
    });
  });
});
