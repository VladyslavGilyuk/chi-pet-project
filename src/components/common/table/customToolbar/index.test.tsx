import '@testing-library/jest-dom/extend-expect';
import CustomToolbar from './index';
import { EFormType } from '..';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
jest.mock('@mui/x-data-grid', () => {
  const originalModule = jest.requireActual('@mui/x-data-grid');
  return {
    ...originalModule,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    GridToolbarContainer: ({ children }: any) => <div>{children}</div>,
  };
});

jest.mock('../../../modals/addEditContact', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditContact'>AddEditContact Mock Component</div>,
}));

jest.mock('../../../modals/addEditTicket', () => ({
  __esModule: true,
  default: () => <div data-testid='addEditTicket'>AddEditTicket Mock Component</div>,
}));
const apiUrl = '/api';
const selectedPriorities: string[] = [];
const setSelectedPriorities = jest.fn();
const disabledFilter = false;
const sortingOptions = [
  { value: 'field1-asc', label: 'Field 1 Asc' },
  { value: 'field2-desc', label: 'Field 2 Desc' },
];
const priorityOptions = ['High', 'Medium', 'Low'];
describe('CustomToolbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CustomToolbar
          apiUrl={apiUrl}
          selectedPriorities={selectedPriorities}
          setSelectedPriorities={setSelectedPriorities}
          disabledFilter={disabledFilter}
          sortingOptions={sortingOptions}
          priorityOptions={priorityOptions}
          formType={EFormType.Tickets}
        />
      </MemoryRouter>,
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Should render all components corectly with filter', () => {
    expect(screen.getByTestId('sort_select_heading')).toBeInTheDocument();
    expect(screen.getByTestId('sort_select')).toBeInTheDocument();
    expect(screen.getByTestId('sort_filter_heading')).toBeInTheDocument();
    expect(screen.getByTestId('sort_filter')).toBeInTheDocument();
    expect(screen.getByTestId('add_button')).toBeInTheDocument();
    expect(screen.getByTestId('plus_icon')).toBeInTheDocument();
  });
  it('Should handle sort change correctly', () => {
    const selectContainer = screen.getByTestId('sort_select');

    const selectButton = within(selectContainer).getByRole('button');

    fireEvent.mouseDown(selectButton);

    fireEvent.click(screen.getByTestId('item_field1-asc'));
    fireEvent.click(screen.getByTestId('item_field2-desc'));
  });
  it('Should handle priority filter correctly', () => {
    const filterSelect = screen.getByTestId('sort_filter');
    const selectButton = within(filterSelect).getByRole('button');
    fireEvent.mouseDown(selectButton);

    priorityOptions.forEach((option) => {
      const checkbox = screen.getByLabelText(option);
      fireEvent.click(checkbox);
    });
    expect(setSelectedPriorities).toHaveBeenCalledTimes(priorityOptions.length);
  });
  it('Should render AddEditTicket modal when formType is Tickets', async () => {
    fireEvent.click(screen.getByTestId('add_button'));

    await waitFor(() => {
      expect(screen.getByTestId('addEditTicket')).toBeInTheDocument();
    });
  });
});
it('Should handle priority filter correctly when disabledFilter is true', () => {
  render(
    <MemoryRouter>
      <CustomToolbar
        apiUrl={apiUrl}
        selectedPriorities={selectedPriorities}
        setSelectedPriorities={setSelectedPriorities}
        disabledFilter={true}
        sortingOptions={sortingOptions}
        priorityOptions={priorityOptions}
        formType={EFormType.Contacts}
      />
    </MemoryRouter>,
  );

  expect(screen.queryByTestId('sort_filter_heading')).not.toBeInTheDocument();
  expect(screen.queryByTestId('sort_filter')).not.toBeInTheDocument();
});
it('Should render AddEditContact modal when formType is Contacts', async () => {
  render(
    <MemoryRouter>
      <CustomToolbar
        apiUrl={apiUrl}
        selectedPriorities={selectedPriorities}
        setSelectedPriorities={setSelectedPriorities}
        disabledFilter={disabledFilter}
        sortingOptions={sortingOptions}
        priorityOptions={priorityOptions}
        formType={EFormType.Contacts}
      />
    </MemoryRouter>,
  );

  fireEvent.click(screen.getByTestId('add_button'));

  await waitFor(() => {
    expect(screen.getByTestId('addEditContact')).toBeInTheDocument();
  });
});
