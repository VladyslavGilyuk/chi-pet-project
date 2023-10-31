import EndAdornment from './endAdorment';
import { ICommonFieldValues } from '../../../types/auth';
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from 'react-hook-form';
import { FormInputWrapper, StyledInput, StyledLabel } from './styled';
import { IBaseField, TSignInFieldNames, TSignUpFieldNames } from '../../../utils/formHelpers';
import { ITicketFieldNames, ITicketFieldValues } from '../../form/tickets/helper';
import { useCallback, useState } from 'react';

interface IProps extends IBaseField {
  name: TSignInFieldNames | TSignUpFieldNames | ITicketFieldNames;
  register: UseFormRegister<ICommonFieldValues> | UseFormRegister<ITicketFieldValues>;
  showIcon?: boolean;
  isError: boolean;
  helperMsg: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>> | undefined;
  isFullWidth?: boolean;
}

const FormInput: React.FC<IProps> = ({
  label,
  name,
  validations,
  placeholder,
  type,
  register,
  isError,
  showIcon,
  helperMsg,
  isFullWidth,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = useCallback(() => setShowPassword((prev) => !prev), []);

  return (
    <FormInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        {...register(name, validations)}
        InputProps={{
          autoComplete: 'off',
          sx: { height: 42, fontSize: 14 },
          endAdornment: showIcon && (
            <EndAdornment show={showPassword} handleClick={handleShowPasswordClick} />
          ),
        }}
        placeholder={placeholder}
        fullWidth={isFullWidth ?? true}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
        error={isError}
        helperText={(helperMsg as string) || ' '}
      />
    </FormInputWrapper>
  );
};

export default FormInput;
