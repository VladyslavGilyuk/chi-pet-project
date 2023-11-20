/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom/extend-expect';
import Table, { EFormType } from './index';
import { render, screen } from '@testing-library/react';
jest.mock('./useTable', () => ({
  __esModule: true,
  useTable: () => ({
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
    isModalOpen: true,
    setIsModalOpen: jest.fn(),
    selectedItem: {},
  }),
}));

jest.mock('./cells/actionCell', () => ({
  __esModule: true,
  default: () => <div data-testid='action-cell'>ActionCell</div>,
}));
jest.mock('./customToolbar', () => ({
  __esModule: true,
  default: () => <div data-testid='custom-toolbar'>CustomToolbar</div>,
}));
jest.mock('../../modals/addEditContact', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditContact'>AddEditContact Mock Component</div>,
}));

jest.mock('../../modals/addEditTicket', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditTicket'>AddEditTicket Mock Component</div>,
}));
const mockData = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

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
  test('renders without crashing', () => {
    render(
      <Table
        storeData={mockStoreData}
        fetchAction={mockFetchAction}
        deleteAction={mockDeleteAction}
        columns={mockColumns}
        sortingOptions={mockSortingOptions}
        priorityOptions={mockPriorityOptions}
        formType={EFormType.Contacts}
      />,
    );
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
  test('renders with the correct number of rows', async () => {
    render(
      <Table
        storeData={mockStoreData}
        fetchAction={mockFetchAction}
        deleteAction={mockDeleteAction}
        columns={mockColumns}
        sortingOptions={mockSortingOptions}
        priorityOptions={mockPriorityOptions}
        formType={EFormType.Contacts}
      />,
    );

    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
  });
  test('renders with the correct columns', () => {
    render(
      <Table
        storeData={mockStoreData}
        fetchAction={mockFetchAction}
        deleteAction={mockDeleteAction}
        columns={mockColumns}
        sortingOptions={mockSortingOptions}
        priorityOptions={mockPriorityOptions}
        formType={EFormType.Contacts}
      />,
    );

    const headerCells = screen.getAllByRole('columnheader');
    expect(headerCells.length).toBe(3);
  });
  test('renders with the correct toolbar', () => {
    render(
      <Table
        storeData={mockStoreData}
        fetchAction={mockFetchAction}
        deleteAction={mockDeleteAction}
        columns={mockColumns}
        sortingOptions={mockSortingOptions}
        priorityOptions={mockPriorityOptions}
        formType={EFormType.Contacts}
      />,
    );

    const customToolbar = screen.getByTestId('custom-toolbar');
    expect(customToolbar).toBeInTheDocument();
  });
  test('renders Contact modal when isModalOpen is true', () => {
    render(
      <Table
        storeData={mockStoreData}
        fetchAction={mockFetchAction}
        deleteAction={mockDeleteAction}
        columns={mockColumns}
        sortingOptions={mockSortingOptions}
        priorityOptions={mockPriorityOptions}
        formType={EFormType.Contacts}
      />,
    );

    expect(screen.getByTestId('addEditContact')).toBeInTheDocument();
    expect(screen.queryByTestId('addEditTicket')).not.toBeInTheDocument();
  });
});
