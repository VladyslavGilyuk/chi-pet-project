import { useForm } from 'react-hook-form';
import { useState } from 'react';

const useAuthForm = () => {
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
  } = useForm();

  return {
    handleSubmit,
    register,
    watch,
    errors,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

export default useAuthForm;
