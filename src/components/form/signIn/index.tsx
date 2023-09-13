import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  StyledLabel,
  StyledLoginButton,
  StyledInput,
  StyledOutlinedInput,
  StyledFooterText,
  StyledSignUpLink,
  FlexContainer,
  StyledFormHelperText,
} from './styled';

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
        <div style={{ width: '100%', marginBottom: '24px' }}>
          <StyledLabel htmlFor='email'>EMAIL</StyledLabel>
          <StyledInput
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
            InputProps={{ sx: { height: 42, fontSize: 14 } }}
            placeholder='Email address'
            fullWidth={true}
            error={!!errors.email}
          />
          <StyledFormHelperText>{errors.email?.message}</StyledFormHelperText>
        </div>
        <StyledLabel htmlFor='password'>PASSWORD</StyledLabel>
        <StyledOutlinedInput
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^.{9,}$/i,
              message: 'Password should be longer than 8 characters',
            },
          })}
          sx={{
            height: 42,
          }}
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          endAdornment={
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
          }
          fullWidth={true}
          error={!!errors.password}
        />
        <StyledFormHelperText>{errors.password?.message}</StyledFormHelperText>
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
