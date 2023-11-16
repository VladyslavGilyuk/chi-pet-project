import '@testing-library/jest-dom';
import AddEditTicket from './index';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('../../forms/tickets', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TicketsForm = ({ toggleModal }: any) => (
    <>
      <div data-testid='tickets-form'> </div>
      <button onClick={toggleModal}>Close</button>
    </>
  );
  return TicketsForm;
});
const mockToggleModal = jest.fn();

const mockInitialValues = {
  id: '1',
  ticket: 'Ticket',
  customer: 'John',
  createDate: '24.06.2023',
  deadlineDate: '29.06.2023',
  updatedDate: '25.06.2023',
  priority: 'High',
  createdBy: {
    name: 'user',
    imageUrl: '',
    id: '1',
  },
};

const mockApiUrl = 'https://example.com';

describe('AddEditTicket', () => {
  it('Should render Modal and Form if open', () => {
    render(
      <AddEditTicket
        toggleModal={mockToggleModal}
        initialValues={mockInitialValues}
        isEdit={false}
        isOpen={true}
        apiUrl={mockApiUrl}
      />,
    );

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('tickets-form')).toBeInTheDocument();
  });
  it('Should not render modal when isOpen is false', () => {
    render(
      <AddEditTicket
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
      <AddEditTicket
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
