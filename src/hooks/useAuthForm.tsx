import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form';
const useAuthForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log('Form data:', data);
  };

  return {
    handleSubmit,
    register,
    errors,
    onSubmit,
  };
};

export default useAuthForm;
