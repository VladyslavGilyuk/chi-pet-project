import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  StyledLabel,
  StyledLoginButton,
  StyledInput,
  StyledFooterText,
  StyledSignUpLink,
  FlexContainer,
} from './styled';
import { SingInFormHelper } from '../../../utils/formHelpers';

interface ISignIn {
  email: string;
  password: string;
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignIn>();

  const onSubmit: SubmitHandler<ISignIn> = (data) => console.log(data);

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: '100%' }}>
          {SingInFormHelper.map((elem) => {
            return (
              <>
                <StyledLabel htmlFor={elem.name}>{elem.label}</StyledLabel>
                <StyledInput
                  {...register(elem.name, elem.validations)}
                  InputProps={{
                    sx: { height: 42, fontSize: 14 },
                    endAdornment: elem.name === 'password' && ( // Only add for password input
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
                  placeholder={elem.placeholder}
                  fullWidth={true}
                  type={elem.name === 'password' && !showPassword ? 'password' : 'text'}
                  error={!!errors[elem.name]}
                  helperText={errors[elem.name]?.message}
                />
              </>
            );
          })}
        </div>
        <StyledLoginButton
          type='submit'
          variant='contained'
          fullWidth={true}
          disableElevation={true}
        >
          Log in
        </StyledLoginButton>
      </form>
      <div>
        <FlexContainer>
          <StyledFooterText variant='subtitle1'>Don’t have an account? </StyledFooterText>
          <StyledSignUpLink variant='subtitle1' underline='none' sx={{ color: 'blue' }}>
            Sign up
          </StyledSignUpLink>
        </FlexContainer>
      </div>
    </div>
  );
}
