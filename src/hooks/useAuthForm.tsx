import { ROUTE_PATH } from '../routes';
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

  const onSignInSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    dispatch(signInAsync(data))
      .then(() => {
        navigate(ROUTE_PATH.Home);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
    const { email, password, firstName, lastName } = data;
    const body = { email, password, firstName, lastName };
    dispatch(signUpAsync(body)).then(() => {
      navigate(ROUTE_PATH.Home);
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
