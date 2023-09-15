import FormInput from '../../common/formInput';
import { SingInFormHelper } from '../../../utils/formHelpers';
import { useState } from 'react';
import { FlexContainer, StyledFooterText, StyledLoginButton, StyledSignUpLink } from './styled';
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

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div style={{ width: '100%' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SingInFormHelper.map(({ name, label, validations, placeholder }) => (
          <FormInput
            key={name}
            name={name}
            label={label}
            validations={validations}
            placeholder={placeholder}
            type={name === 'password' && !showPassword ? 'password' : 'text'} //ok?
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            register={register}
            errors={errors}
          />
        ))}

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
