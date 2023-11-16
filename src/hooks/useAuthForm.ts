import { ROUTE_PATH } from '../routes';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ICommonFieldValues, ISignIn, ISignUp } from '../types/auth';
import { signInAsync, signUpAsync } from '../store/user/thunk';

const useAuthForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICommonFieldValues>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSignInSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    dispatch(signInAsync(data)).then((response) => {
      if (response.payload) {
        navigate(ROUTE_PATH.Home);
      }
    });
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
    const { email, password, firstName, lastName } = data;
    const body = { email, password, firstName, lastName };
    dispatch(signUpAsync(body)).then((response) => {
      if (response.payload) {
        navigate(ROUTE_PATH.Home);
      }
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
