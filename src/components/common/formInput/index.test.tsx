import '@testing-library/jest-dom/extend-expect';
import FormInput from './index';
import { TSignUpFieldNames } from '../../../utils/formHelpers';
import { fireEvent, render, screen } from '@testing-library/react';

describe('FormInput', () => {
  const mockProps = {
    label: 'Test Label',
    name: 'text' as TSignUpFieldNames,
    validations: {
      required: true,
    },
    placeholder: 'Test Placeholder',
    type: 'text' as const,
    register: jest.fn(),
    isError: false,
    showIcon: true,
    helperMsg: 'Test helper message',
    isFullWidth: true,
  };

  it('Should render input, and check for corresponding text in label and placeholder', () => {
    render(<FormInput {...mockProps} />);

    expect(screen.getByTestId('text-input')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });
  it('Should call the register function with the correct arguments', () => {
    render(<FormInput {...mockProps} />);

    expect(mockProps.register).toHaveBeenCalledWith('text', {
      required: true,
    });
  });
  it('Should render with a password type and show/hide password on icon click', () => {
    render(
      <FormInput
        {...mockProps}
        label='Password'
        name='password'
        validations={{ required: 'This field is required' }}
        placeholder='Enter your password'
        type='password'
        isError={false}
        showIcon={true}
        helperMsg=''
      />,
    );
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');

    fireEvent.click(screen.getByTestId('adornment_button')); //depends on endAdorment

    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');

    fireEvent.click(screen.getByTestId('adornment_button')); //depends on endAdorment

    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });
  it('Should render with an error state and displays error message', () => {
    const errorMessage = 'This field is required';
    render(
      <FormInput
        {...mockProps}
        label='Username'
        name='firstName'
        validations={{ required: errorMessage }}
        isError={true}
        helperMsg={errorMessage}
      />,
    );

    expect(screen.getByLabelText('Username')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
  it('Should render without an icon when showIcon is set to false', () => {
    render(<FormInput {...mockProps} label='No Icon' name='firstName' showIcon={false} />);

    expect(screen.queryByTestId('toggle-password-icon')).toBeNull();
  });
});
