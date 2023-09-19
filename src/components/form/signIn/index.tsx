import { FieldError } from 'react-hook-form';
import FormInput from '../../common/formInput';
import { ROUTE_PATH } from '../../../routes';
import { getFormHelper } from '../../../utils/formHelpers';
import useSignInForm from '../../../hooks/useSignInForm';
import { useTranslation } from 'react-i18next';

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
  const { SingInFormHelper } = getFormHelper();
  const { t } = useTranslation();
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
          {t('button.signIn')}
        </StyledLoginButton>
      </form>
      <div>
        <FlexContainer>
          <StyledFooterText variant='subtitle1'>{t('footer.signIn')}</StyledFooterText>
          <StyledSignUpLink href={ROUTE_PATH.SingUp} underline='none'>
            {t('link.signIn')}
          </StyledSignUpLink>
        </FlexContainer>
      </div>
    </FormInputWrapper>
  );
};

export default SignInForm;
