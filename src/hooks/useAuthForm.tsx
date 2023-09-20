import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FieldValues, SubmitHandler } from 'react-hook-form';
interface ISignIn {
  email: string;
  password: string;
}
interface ISignUp extends ISignIn {
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}

export interface CommonFieldValues extends FieldValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}
const useAuthForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CommonFieldValues>();

  const onSignInSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    console.log('Form data:', data);
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
    axios
      .post('http://localhost:8080/register', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    console.log('Form data:', data);
  };

  return {
    handleSubmit,
    register,
    errors,
    onSignInSubmit,
    onSignUpSubmit,
  };
};

export default useAuthForm;
