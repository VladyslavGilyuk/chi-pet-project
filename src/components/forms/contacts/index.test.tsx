import '@testing-library/jest-dom/extend-expect';
import ContactsForm from './index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';
import { createContactAsync, updateContactAsync } from '../../../store/contacts/thunk';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useAppDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../../store/contacts/thunk', () => ({
  createContactAsync: jest.fn(),
  updateContactAsync: jest.fn().mockResolvedValue({}),
}));
const store = configureStore({
  reducer: {
    contacts: () => ({
      contacts: [],
      total: 0,
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
describe('ContactsForm Component', () => {
  const toggleModalMock = jest.fn();
  const editInitialValues = {
    id: '1',
    firstName: 'Mandeep',
    lastName: 'Walto',
    email: 'mandeep.walton@gmail.com',
    address: 'Unit 1, Moons Park',
    createDate: '2023-09-26T18:30:00.000Z',
    createdBy: {
      name: 'user',
      imageUrl: 'profilePhoto1.png',
      id: '1',
    },
  };
  const defaultProps = {
    toggleModal: toggleModalMock,
    initialValues: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      createDate: '',
      createdBy: {
        name: '',
        imageUrl: '',
        id: '',
      },
    },
    isEdit: false,
    apiUrl: 'https://example.com',
  };

  it('Should render the ContactsForm component', () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} />
      </Provider>,
    );
    expect(screen.getByTestId('form_heading')).toBeInTheDocument();
    expect(screen.getByTestId('contacts_form')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();

    expect(screen.getByLabelText('First Name')).toHaveValue('');
    expect(screen.getByLabelText('Last Name')).toHaveValue('');
    expect(screen.getByLabelText('Email')).toHaveValue('');
    expect(screen.getByLabelText('Address')).toHaveValue('');
  });
  it('Should submit with Edit thunk not Create if Edit form is true', async () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} initialValues={editInitialValues} isEdit={true} />
      </Provider>,
    );
    expect(screen.getByLabelText('First Name')).toHaveValue('Mandeep');
    expect(screen.getByLabelText('Last Name')).toHaveValue('Walto');
    expect(screen.getByLabelText('Email')).toHaveValue('mandeep.walton@gmail.com');
    expect(screen.getByLabelText('Address')).toHaveValue('Unit 1, Moons Park');

    act(() => {
      userEvent.click(screen.getByText('Save'));
    });

    await waitFor(() => {
      expect(createContactAsync).not.toHaveBeenCalled();
      expect(updateContactAsync).toHaveBeenCalled();
    });
  });
  it('Should submit with the Create function', async () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} />
      </Provider>,
    );
    act(() => {
      userEvent.type(screen.getByLabelText('First Name'), 'John');
      userEvent.type(screen.getByLabelText('Last Name'), 'Doe');
      userEvent.type(screen.getByLabelText('Email'), 'john.doe@example.com');
      userEvent.type(screen.getByLabelText('Address'), '123 Main St, City, Country');

      userEvent.click(screen.getByText('Save'));
    });

    await waitFor(() => {
      expect(createContactAsync).toHaveBeenCalledWith({
        apiUrl: 'https://example.com',
        data: expect.objectContaining({
          email: 'john.doe@example.com',
          address: '123 Main St, City, Country',
          firstName: 'John',
          lastName: 'Doe',
        }),
      });
    });
  });
  it('Should submit with the Edit function if Edit form is true', async () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} initialValues={editInitialValues} isEdit={true} />
      </Provider>,
    );

    act(() => {
      userEvent.clear(screen.getByLabelText('First Name'));
      userEvent.type(screen.getByLabelText('First Name'), 'John');
      userEvent.type(screen.getByLabelText('Last Name'), 'NeWalto');
      userEvent.click(screen.getByText('Save'));
    });

    await waitFor(() => {
      expect(updateContactAsync).toHaveBeenCalledWith({
        id: '1',
        data: expect.objectContaining({
          firstName: 'John',
          lastName: 'WaltoNeWalto',
        }),
      });
    });
  });
  it('Should not submit Create function if no values has changed ', async () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} />
      </Provider>,
    );
    await act(async () => {
      userEvent.click(screen.getByText('Save'));
    });

    await waitFor(() => {
      expect(createContactAsync).not.toHaveBeenCalled();
    });
  });
  it('Should not submit Create function if not all values has changed ', async () => {
    render(
      <Provider store={store}>
        <ContactsForm {...defaultProps} />
      </Provider>,
    );
    await act(async () => {
      userEvent.type(screen.getByLabelText('First Name'), 'John');
      userEvent.click(screen.getByText('Save'));
    });

    await waitFor(() => {
      expect(createContactAsync).not.toHaveBeenCalled();
    });
  });
});
