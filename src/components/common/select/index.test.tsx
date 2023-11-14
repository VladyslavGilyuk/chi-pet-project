import '@testing-library/jest-dom/extend-expect';
import CustomSelect, { ISelectOptions } from './index';
import { render, screen } from '@testing-library/react';

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
});
