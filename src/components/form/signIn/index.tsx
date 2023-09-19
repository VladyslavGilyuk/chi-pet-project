import FormInput from '../../common/formInput';
import { ROUTE_PATH } from '../../../routes';
import { SingInFormHelper } from '../../../utils/formHelpers';
import useSignInForm from './useSignInForm';

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
const SignInForm = () => {
  const { showPassword, handleSubmit, register, errors, onSubmit, generateAdornmentProps } =
    useSignInForm();

  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SingInFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
            showPassword={showPassword}
            adornmentProps={generateAdornmentProps(instance.name)}
            register={register}
            isError={!!errors[instance.name]}
            helperMsg={errors[instance.name]?.message}
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
