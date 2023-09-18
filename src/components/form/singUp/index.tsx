import { FieldError } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { SingUpFormHelper } from '../../../utils/formHelpers';
import useSignUpForm from '../../../hooks/useSignUpForm';
import { FormInputWrapper, StyledLoginButton } from './styled';

export interface ISignUp {
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
export interface FieldErrors {
  [key: string]: FieldError | undefined;
}
const SignUpForm = () => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
    register,
    watch,
    errors,
    onSubmit,
    generateAdornmentProps,
  } = useSignUpForm();

  const password = watch('password', '');
  const passwordConfirmation = watch('passwordConfirmation', '');

  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {SingUpFormHelper.map(({ name, label, validations, placeholder, type }) => (
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
            password={password}
            passwordConfirmation={passwordConfirmation}
            errors={errors as FieldErrors}
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
