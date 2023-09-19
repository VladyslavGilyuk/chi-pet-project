import EndAdornment from './endAdorment';
import { useState } from 'react';
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';
import { FormInputWrapper, StyledInput, StyledLabel } from './styled';
import { IBaseField, TSignInFieldNames, TSignUpFieldNames } from '../../../utils/formHelpers';

interface FormInputProps extends IBaseField {
  name: TSignInFieldNames | TSignUpFieldNames;
  showPassword: boolean;
  adornmentProps?: {
    show?: boolean;
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
  register: UseFormRegister<FieldValues>;
  isError: boolean;
  helperMsg: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  validations,
  placeholder,
  type,
  adornmentProps,
  register,
  isError,
  helperMsg,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        {...register(name, validations)}
        InputProps={{
          sx: { height: 42, fontSize: 14 },
          endAdornment: (
            <EndAdornment
              adornmentProps={{
                ...adornmentProps,
                handleClick: () => setShowPassword(!showPassword),
              }}
            />
          ),
        }}
        placeholder={placeholder}
        fullWidth={true}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        error={isError}
        helperText={(helperMsg as string) || ' '}
      />
    </FormInputWrapper>
  );
};

export default FormInput;
