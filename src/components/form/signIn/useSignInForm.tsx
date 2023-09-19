import { ISignIn } from '.';
import { SubmitHandler } from 'react-hook-form';
import useAuthForm from '../../../hooks/useAuthForm';

const useSignInForm = () => {
  const {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleSubmit,
    register,
    errors,
  } = useAuthForm();

  const onSubmit: SubmitHandler<ISignIn> = (data) => {
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
    errors,
    onSubmit,
    generateAdornmentProps,
  };
};

export default useSignInForm;
