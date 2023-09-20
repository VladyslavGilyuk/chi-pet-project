import FormInput from '../../common/formInput';
import useAuthForm from '../../../hooks/useAuthForm';
import useFormHelpers from '../../../utils/formHelpers';
import { useTranslation } from 'react-i18next';
import { FormInputWrapper, StyledLoginButton } from './styled';

const SignUpForm = () => {
  const { handleSubmit, register, errors, onSignUpSubmit } = useAuthForm();
  const { t } = useTranslation();
  const { SingUpFormHelper } = useFormHelpers();
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
          {t('signUp.button')}
        </StyledLoginButton>
      </form>
    </FormInputWrapper>
  );
};

export default SignUpForm;
