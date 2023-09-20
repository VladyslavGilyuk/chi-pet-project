import FormInput from '../../common/formInput';
import { ROUTE_PATH } from '../../../routes';
import { useTranslation } from 'react-i18next';
import { SingInFormHelper } from '../../../utils/formHelpers';
import useAuthForm from '../../../hooks/useAuthForm';

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
