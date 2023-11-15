import '@testing-library/jest-dom/extend-expect';
import DatePicker from './index';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@mui/x-date-pickers/internals/demo', () => ({
  DemoContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid='mocked_demo_container'>{children}</div>
  ),
}));
const mockonChange = jest.fn();
const mockErrors = {};
const mockDate = new Date('2023-11-14T21:41:00');

const mockProps = {
  errors: mockErrors,
  date: mockDate,
  onChange: mockonChange,
};

describe('imageUploader', () => {
  it('Should display date input', () => {
    render(<DatePicker {...mockProps} />);

    expect(screen.getByTestId('date_picker_heading')).toBeInTheDocument();
  });
  it('Should display the correct value in StyledDatePicker', () => {
    render(<DatePicker {...mockProps} />);

    expect(screen.getByRole('textbox')).toHaveValue('11/14/2023 09:41 PM');
  });
  it('Should display an empty value in StyledDatePicker when date is empty', () => {
    render(<DatePicker {...mockProps} date='' />);

    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  it('Should call the onChange handler when a date is selected', async () => {
    render(<DatePicker {...mockProps} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '2023-11-11T21:41:00' } });

    expect(mockonChange).toHaveBeenCalled();
  });
  it('Should display an error message when there are errors', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render(<DatePicker {...mockProps} errors={{ deadlineDate: 'Date is required' } as any} />);
    const errorText = 'Date is required';
    const helperTextElement = screen.getByText(errorText);
    expect(helperTextElement).toBeInTheDocument();
  });
});
