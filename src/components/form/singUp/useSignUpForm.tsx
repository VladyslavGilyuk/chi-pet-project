import { ISignUp } from '.';
import { SubmitHandler } from 'react-hook-form';
import useAuthForm from '../../../hooks/useAuthForm';

const useSignUpForm = () => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
    register,
    watch,
    errors,
  } = useAuthForm();

  const onSubmit: SubmitHandler<ISignUp> = (data) => {
    console.log('Form submitted with data:', data);
  };
  const generateAdornmentProps = (name: string) => {
    switch (name) {
      case 'password':
        return {
          position: 'end',
          show: showPassword,
          handleClick: handleClickShowPassword,
          handleMouseDown: handleMouseDownPassword,
        };
      case 'passwordConfirmation':
        return {
          position: 'end',
          show: showPassword,
          handleClick: handleClickShowPassword,
          handleMouseDown: handleMouseDownPassword,
        };
      default:
        return undefined;
    }
  };

  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
    register,
    watch,
    errors,
    onSubmit,
    generateAdornmentProps,
  };
};

export default useSignUpForm;
