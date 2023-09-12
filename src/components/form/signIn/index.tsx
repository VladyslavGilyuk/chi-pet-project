import { Typography } from '@mui/material';
import React from 'react';
import { StyledLabel, StyledButton, StyledInput } from './styled';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ISignIn {
  email: string;
  password: string;
}

export default function SignInForm() {
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
          label='Email adress'
          //onChange={(e) => field.onChange(e)}
          //value={field.value}
          fullWidth={true}
          size='small'
          margin='normal'
          className='auth-form__input'
          error={!!errors.email?.message}
          helperText={errors?.email?.message}
        />
        <StyledLabel htmlFor='email'>PASSWORD</StyledLabel>
        <StyledInput
          label='Password'
          //onChange={(e) => field.onChange(e)}
          //value={field.value}
          fullWidth={true}
          size='small'
          margin='normal'
          type='password'
          className='auth-form__input'
          error={!!errors?.password?.message}
          helperText={errors?.password?.message}
        />
        <StyledButton
          type='submit'
          variant='contained'
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Log in
        </StyledButton>
      </form>
      <div className='auth-form__footer'>
        <Typography variant='subtitle1' component='span'>
          Don’t have an account?{' '}
        </Typography>
        <Typography variant='subtitle1' component='span' sx={{ color: 'blue' }}>
          Sign up
        </Typography>
      </div>
    </div>
  );
}
