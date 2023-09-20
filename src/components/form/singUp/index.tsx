import FormInput from '../../common/formInput';
import { SingUpFormHelper } from '../../../utils/formHelpers';
import useAuthForm from '../../../hooks/useAuthForm';
import { FormInputWrapper, StyledLoginButton } from './styled';

const SignUpForm = () => {
  const { handleSubmit, register, errors, onSignUpSubmit } = useAuthForm();

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
          Register
        </StyledLoginButton>
      </form>
    </FormInputWrapper>
  );
};

export default SignUpForm;
