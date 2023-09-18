import { FieldError } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { ROUTE_PATH } from '../../../routes';
import { SingInFormHelper } from '../../../utils/formHelpers';
import useSignInForm from '../../../hooks/useSignInForm';

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
          <StyledSignUpLink href={ROUTE_PATH.SingUp} underline='none'>
            Sign up
          </StyledSignUpLink>
        </FlexContainer>
      </div>
    </FormInputWrapper>
  );
};

export default SignInForm;
