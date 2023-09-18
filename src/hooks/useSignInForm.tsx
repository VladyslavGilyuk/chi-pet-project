import { ISignIn } from '../components/form/signIn';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useSignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignIn>();

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
