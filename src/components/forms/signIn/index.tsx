import FormInput from '../../common/formInput';
import { ROUTE_PATH } from '../../../routes';
import useAuthForm from '../../../hooks/useAuthForm';
import useFormHelpers from '../../../utils/formHelpers';
import { useTranslation } from 'react-i18next';

import {
  FlexContainer,
  FormInputWrapper,
  StyledFooterText,
  StyledLoginButton,
  StyledSignUpLink,
} from './styled';

const SignInForm = () => {
  const { handleSubmit, register, errors, onSignInSubmit } = useAuthForm();
  const { t } = useTranslation();
  const { SingInFormHelper } = useFormHelpers(t);
  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSignInSubmit)} data-testid={`signIn_form`}>
        {SingInFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
            register={register}
            isError={!!errors[instance.name]}
            helperMsg={errors[instance.name]?.message}
            data-testid={`input_${instance.name}`}
          />
        ))}
        <StyledLoginButton
          data-testid={`logIn_button`}
          type='submit'
          variant='contained'
          fullWidth={true}
          disableElevation={true}
        >
          {t('signIn.button')}
        </StyledLoginButton>
      </form>
      <div>
        <FlexContainer>
          <StyledFooterText variant='subtitle1'>{t('signIn.footer')}</StyledFooterText>
          <StyledSignUpLink href={ROUTE_PATH.SignUp} underline='none' data-testid={`signUp_button`}>
            {t('signIn.link')}
          </StyledSignUpLink>
        </FlexContainer>
      </div>
    </FormInputWrapper>
  );
};

export default SignInForm;
