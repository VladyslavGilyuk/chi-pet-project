import '@testing-library/jest-dom';
import AddEditContact from './index';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../../forms/contacts', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ContactsForm = ({ toggleModal }: any) => (
    <>
      <div data-testid='contacts-form'> </div>
      <button onClick={toggleModal}>Close</button>
    </>
  );
  return ContactsForm;
});
const mockToggleModal = jest.fn();

const mockInitialValues = {
  id: '1',
  email: 'user@gmail.com',
  address: '5 Avenue',
  createDate: '24.06.2023',
  firstName: 'John',
  lastName: 'Moe',
  createdBy: {
    name: 'user',
    imageUrl: '',
    id: '1',
  },
};

const mockApiUrl = 'https://example.com';

describe('AddEditContact', () => {
  it('Should render Modal and Form if open', () => {
    render(
      <AddEditContact
        toggleModal={mockToggleModal}
        initialValues={mockInitialValues}
        isEdit={false}
        isOpen={true}
        apiUrl={mockApiUrl}
      />,
    );

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('contacts-form')).toBeInTheDocument();
  });
  it('Should not render modal when isOpen is false', () => {
    render(
      <AddEditContact
        toggleModal={mockToggleModal}
        initialValues={mockInitialValues}
        isEdit={false}
        isOpen={false}
        apiUrl={mockApiUrl}
      />,
    );

    expect(screen.queryByTestId('modal')).toBeNull();
  });
  it('Should call toggleModal when modal is closed', () => {
    render(
      <AddEditContact
        toggleModal={mockToggleModal}
        initialValues={mockInitialValues}
        isEdit={false}
        isOpen={true}
        apiUrl={mockApiUrl}
      />,
    );

    const closeButton = screen.getByText('Close');

    fireEvent.click(closeButton);

    expect(mockToggleModal).toHaveBeenCalled();
  });
});
