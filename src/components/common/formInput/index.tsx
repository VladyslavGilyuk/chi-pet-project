import EndAdornment from './endAdorment';
import { FieldErrors } from '../../form/signIn/index';
import { ISingInFormHelper } from '../../../utils/formHelpers';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { FormInputWrapper, StyledInput, StyledLabel } from './styled';

interface FormInputProps extends ISingInFormHelper {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  adornmentProps?: {
    show?: boolean;
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  password?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passwordConfirmation?: any;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  validations,
  placeholder,
  type,
  showPassword,
  adornmentProps,
  register,
  errors,
  password,
  passwordConfirmation,
}) => {
  return (
    <FormInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        {...register(name, validations)}
        InputProps={{
          sx: { height: 42, fontSize: 14 },
          endAdornment: <EndAdornment adornmentProps={adornmentProps} />,
        }}
        placeholder={placeholder}
        fullWidth={true}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        error={!!errors[name]}
        helperText={
          name === 'passwordConfirmation'
            ? password === passwordConfirmation
              ? ' '
              : errors[name]?.message ?? ' '
            : errors[name]?.message ?? ' '
        }
      />
    </FormInputWrapper>
  );
};

export default FormInput;
