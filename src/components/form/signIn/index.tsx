import { FieldError } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../../routes';
import { SingInFormHelper } from '../../../utils/formHelpers';
import useSignInForm from '../../../hooks';

import {
  FlexContainer,
  FormInputWrapper,
  StyledFooterText,
  StyledLoginButton,
  StyledSignUpLink,
} from './styled';

export interface ISignIn {
  email?: string;
  password?: string;
}
export interface FieldErrors {
  [key: string]: FieldError | undefined;
}
const SignInForm = () => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
    register,
    errors,
    onSubmit,
    generateAdornmentProps,
  } = useSignInForm();

  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SingInFormHelper.map(({ name, label, validations, placeholder, type }) => (
          <FormInput
            key={name}
            name={name}
            label={label}
            validations={validations}
            placeholder={placeholder}
            type={type}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            adornmentProps={generateAdornmentProps(name)}
            register={register}
            errors={errors as FieldErrors}
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
          <Link to={ROUTE_PATH.SingUp}>
            <StyledSignUpLink variant='subtitle1' underline='none' sx={{ color: 'blue' }}>
              Sign up
            </StyledSignUpLink>
          </Link>
        </FlexContainer>
      </div>
    </FormInputWrapper>
  );
};

export default SignInForm;
