import '@testing-library/jest-dom/extend-expect';
import UnresolvedTicketsBox from './index';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
jest.mock('../../modals/unresolvedTickets', () => ({
  __esModule: true,
  default: () => <div data-testid='modal'>Modal</div>,
}));
jest.mock('./helper', () => ({
  __esModule: true,
  IUnresolvedTicket: jest.fn(),
  tickets: [
    { status: 'Open', Total: 10 },
    { status: 'Closed', Total: 15 },
  ],
}));

describe('UnresolvedTicketsBox', () => {
  it('Should render component all main tags and corresponding info from helper', () => {
    render(<UnresolvedTicketsBox />);

    expect(screen.getByTestId('heading')).toBeInTheDocument();
    expect(screen.getByTestId('heading-button')).toBeInTheDocument();
    expect(screen.getByTestId('group-label')).toBeInTheDocument();
    expect(screen.getByTestId('group-name')).toBeInTheDocument();

    expect(screen.getByTestId('status-Open')).toBeInTheDocument();
    expect(screen.getByTestId('status-Closed')).toBeInTheDocument();
    expect(screen.getByTestId('total-10')).toBeInTheDocument();
    expect(screen.getByTestId('total-15')).toBeInTheDocument();
  });

  it('Should render modal when "View details" button is clicked', async () => {
    render(<UnresolvedTicketsBox />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('heading-button'));

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });
});
