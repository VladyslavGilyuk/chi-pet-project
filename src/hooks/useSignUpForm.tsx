import { ISignUp } from '../components/form/singUp';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useSignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<ISignUp>();

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
