import { FieldError } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { getFormHelper } from '../../../utils/formHelpers';
import useSignUpForm from '../../../hooks/useSignUpForm';
import { useTranslation } from 'react-i18next';
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
  const { SingUpFormHelper } = getFormHelper();
  const { t } = useTranslation();
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
          {t('button.signUp')}
        </StyledLoginButton>
      </form>
    </FormInputWrapper>
  );
};

export default SignUpForm;
