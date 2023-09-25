import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ICommonFieldValues, ISignIn, ISignUp } from '../types/auth';
import { signInAsync, signUpAsync } from '../store/user/actions';

const useAuthForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICommonFieldValues>();

  const onSignInSubmit: SubmitHandler<ISignIn> = async (data: ISignIn) => {
    await dispatch(signInAsync(data))
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = async (data: ISignUp) => {
    await dispatch(signUpAsync(data))
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
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
