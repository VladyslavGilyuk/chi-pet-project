import '@testing-library/jest-dom/extend-expect';
import EndAdornment from './index';
import { fireEvent, render, screen } from '@testing-library/react';
const mockHandleClick = jest.fn();
const mockShow = true;

const mockProps = {
  show: mockShow,
  handleClick: mockHandleClick,
};

describe('EndAdornment', () => {
  it('Should render input and clickable buton', () => {
    render(<EndAdornment {...mockProps} />);

    const input = screen.getByTestId('adornment_input');
    const button = screen.getByTestId('adornment_button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalled();
  });
  it('Should toggle visibility icon based on the "show" prop', () => {
    const { rerender } = render(<EndAdornment show={true} />);

    expect(screen.getByTestId('adornment_visibility_off')).toBeInTheDocument();

    rerender(<EndAdornment show={false} />);

    expect(screen.getByTestId('adornment_visibility')).toBeInTheDocument();
  });
});
