import FormInput from '../../common/formInput';
import { SingUpFormHelper } from '../../../utils/formHelpers';
import useSignUpForm from './useSignUpForm';
import { FormInputWrapper, StyledLoginButton } from './styled';
export interface ISignUp {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
const SignUpForm = () => {
  const { showPassword, handleSubmit, register, errors, onSubmit, generateAdornmentProps } =
    useSignUpForm();

  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SingUpFormHelper.map((instance) => (
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
          Register
        </StyledLoginButton>
      </form>
    </FormInputWrapper>
  );
};

export default SignUpForm;
