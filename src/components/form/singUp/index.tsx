import FormInput from '../../common/formInput';
import { SingUpFormHelper } from '../../../utils/formHelpers';
import useAuthForm from '../../../hooks/useAuthForm';
import { useTranslation } from 'react-i18next';
import { FormInputWrapper, StyledLoginButton } from './styled';

const SignUpForm = () => {
  const { handleSubmit, register, errors, onSignUpSubmit } = useAuthForm();
  const { t } = useTranslation();
  return (
    <FormInputWrapper>
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
        {SingUpFormHelper.map((instance) => (
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
          {t('button.signUp')}
        </StyledLoginButton>
      </form>
    </FormInputWrapper>
  );
};

export default SignUpForm;
