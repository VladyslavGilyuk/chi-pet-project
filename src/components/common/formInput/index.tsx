import { ISingInFormHelper } from '../../../utils/formHelpers';
import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { StyledInput, StyledLabel } from './styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface FormInputProps extends ISingInFormHelper {
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  validations,
  placeholder,
  type,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  register,
  errors,
}) => {
  return (
    <div className='this'>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        {...register(name, validations)}
        InputProps={{
          sx: { height: 42, fontSize: 14 },
          endAdornment: name === 'password' && (
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
        fullWidth={true}
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message ?? ' '}
      />
    </div>
  );
};

export default FormInput;