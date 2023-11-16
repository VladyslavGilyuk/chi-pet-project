import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event';
import CustomSelect, { ISelectOptions } from './index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('CustomSelect', () => {
  const mockOptions: ISelectOptions[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const mockProps = {
    value: '',
    onChange: jest.fn(),
    options: mockOptions,
    errors: {},
    label: 'Select Label',
    placeholder: 'Select Placeholder',
    taskSelect: true,
  };

  it('Should render CustomSelect correctly with correct Label and Placeholder text', () => {
    render(<CustomSelect {...mockProps} />);

    expect(screen.getByTestId('custom-select')).toBeInTheDocument();
    expect(screen.getByText('Select Label')).toBeInTheDocument();
    expect(screen.getByText('Select Placeholder')).toBeInTheDocument();
  });
  it('Should display the selected value', () => {
    render(<CustomSelect {...mockProps} value='option1' />);

    expect(screen.getByRole('button', { name: 'option1' })).toBeInTheDocument();
  });
  it('Should call onChange when the value changes', () => {
    render(<CustomSelect {...mockProps} />);

    const select = screen.getByRole('button');

    fireEvent.mouseDown(select);
    fireEvent.click(screen.getByTestId('item_option1'));

    expect(mockProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'option1' } }),
    );
  });
  /*
  it('Should call onChange when the value changes', () => {
    render(<CustomSelect {...mockProps} />);

    const select = screen.getByTestId('custom-select');

    // Simulate a change event by selecting the option with the label 'Option 1'
    userEvent.selectOptions(select, 'Option 1');

    // Assert that onChange is called with the expected value
    expect(mockProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: 'option1' } }),
    );
  });
  */
});
