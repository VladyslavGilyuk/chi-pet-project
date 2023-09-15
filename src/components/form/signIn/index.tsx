import { SingInFormHelper } from '../../../utils/formHelpers';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {
  FlexContainer,
  StyledFooterText,
  StyledInput,
  StyledLabel,
  StyledLoginButton,
  StyledSignUpLink,
} from './styled';
import { IconButton, InputAdornment } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ISignIn {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignIn>();

  const onSubmit: SubmitHandler<ISignIn> = (data: { email: string; password: string }) =>
    console.log(data);

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: '100%' }}>
          {SingInFormHelper.map(({ name, label, validations, placeholder }) => {
            // destructure { name }
            return (
              <div key={name}>
                <StyledLabel htmlFor={name}>{label}</StyledLabel>
                <StyledInput
                  {...register(name, validations)}
                  InputProps={{
                    sx: { height: 42, fontSize: 14 },
                    endAdornment: name === 'password' && ( // Only add for password input
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder={placeholder}
                  fullWidth={true}
                  type={name === 'password' && !showPassword ? 'password' : 'text'}
                  error={!!errors[name]}
                  helperText={errors[name]?.message ?? ' '}
                />
              </div>
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
};

export default SignInForm;
