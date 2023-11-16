import '@testing-library/jest-dom/extend-expect';
import ActionCell from './actionCell';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@mui/icons-material/MoreVert', () => ({
  __esModule: true,
  default: () => <span data-testid='more-vert-icon'>MoreVertIcon</span>,
}));

describe('ActionCell component', () => {
  const mockProps = {
    id: '1',
    apiUrl: 'https://example.com/api',
    handleUpdateItem: jest.fn(),
    handleRemoveItem: jest.fn(),
  };

  it('Should render select with icon', () => {
    render(<ActionCell {...mockProps} />);
    expect(screen.getByTestId('more-vert-icon')).toBeInTheDocument();
    expect(screen.getByTestId('custom_select')).toBeInTheDocument();
  });

  it('Should render Edit and Delete menu items', () => {
    render(<ActionCell {...mockProps} />);
    fireEvent.mouseDown(screen.getByRole('button'));
    expect(screen.getByTestId('edit_button')).toBeInTheDocument();
    expect(screen.getByTestId('delete_button')).toBeInTheDocument();
  });
});
