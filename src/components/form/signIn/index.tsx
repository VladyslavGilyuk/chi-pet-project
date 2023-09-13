import { IconButton, InputAdornment } from '@mui/material';
import React from 'react';
import {
  StyledLabel,
  StyledLoginButton,
  StyledInput,
  StyledOutlinedInput,
  StyledFooterText,
  StyledSignUpLink,
  FlexContainer,
} from './styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    //register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignIn>();
  const onSubmit: SubmitHandler<ISignIn> = (data) => console.log(data);

  console.log(watch('email')); // watch input value by passing the name of it

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <StyledLabel htmlFor='email'>EMAIL</StyledLabel>
        <StyledInput
          InputProps={{ sx: { height: 42, fontSize: 14 } }}
          //label='Email adress' // забрав і начало норм працювати
          //onChange={(e) => field.onChange(e)}
          //value={field.value}
          placeholder='Email adress'
          fullWidth={true}
          error={!!errors.email?.message}
          helperText={errors?.email?.message}
        />
        <StyledLabel htmlFor='email'>PASSWORD</StyledLabel>
        <StyledOutlinedInput
          sx={{
            height: 42,
          }}
          placeholder='Password'
          //label='Password'
          //onChange={(e) => field.onChange(e)}
          //value={field.value}
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
          error={!!errors?.password?.message}
          //helperText={errors?.password?.message}
        />
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
