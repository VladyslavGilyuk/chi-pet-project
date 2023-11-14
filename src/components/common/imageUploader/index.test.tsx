import '@testing-library/jest-dom/extend-expect';
import ImageUploader from './index';
import { fireEvent, render, screen } from '@testing-library/react';
const mockRegister = jest.fn();
const mockErrors = {};

const mockProps = {
  register: mockRegister,
  errors: mockErrors,
};
describe('imageUploader', () => {
  beforeEach(() => {
    render(<ImageUploader {...mockProps} />);
  });
  it('Should NOT display input', () => {
    const inputElement = screen.getByTestId('file_input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveStyle({ display: 'none' });
  });
  it('Should render clickable Buttons and check button text', () => {
    const iconButton = screen.getByTestId('icon_button');
    const textButton = screen.getByTestId('text_button');

    expect(iconButton).toBeInTheDocument();
    expect(textButton).toBeInTheDocument();

    fireEvent.click(iconButton);
    fireEvent.click(textButton);

    expect(screen.getByTestId('text')).toHaveTextContent('Add Photo');
  });
  it('Should render Icon', () => {
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it('Should register the image input with react-hook-form', () => {
    expect(mockRegister).toHaveBeenCalledWith('image');
  });
  it('Should have input type file', () => {
    expect(screen.getByLabelText('Image')).toHaveAttribute('type', 'file');
  });
});
