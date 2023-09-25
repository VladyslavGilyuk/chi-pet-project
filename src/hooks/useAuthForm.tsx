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
    try {
      const action = await dispatch(signInAsync(data));
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    } catch (error) {
      console.error('Error occurred during sign in:', error);
    }
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = async (data: ISignUp) => {
    try {
      const action = await dispatch(signUpAsync(data));
      if (action.meta.requestStatus === 'fulfilled') {
        navigate('/');
      }
    } catch (error) {
      console.error('Error occurred during sign up:', error);
    }
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
