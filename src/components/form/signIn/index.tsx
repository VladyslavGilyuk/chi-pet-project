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
  const { SingInFormHelper } = useFormHelpers();
  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSignInSubmit)}>
        {SingInFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
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
          {t('signIn.button')}
        </StyledLoginButton>
      </form>
      <div>
        <FlexContainer>
          <StyledFooterText variant='subtitle1'>{t('signIn.footer')}</StyledFooterText>
          <StyledSignUpLink href={ROUTE_PATH.SingUp} underline='none'>
            {t('signIn.link')}
          </StyledSignUpLink>
        </FlexContainer>
      </div>
    </FormInputWrapper>
  );
};

export default SignInForm;
