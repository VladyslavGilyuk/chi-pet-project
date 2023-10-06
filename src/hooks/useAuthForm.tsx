import { ROUTE_PATH } from '../routes';
import { SubmitHandler } from 'react-hook-form';
import { addTask } from '../store/tasks/slice';
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
    control,
    getValues,
    setValue,
  } = useForm<ICommonFieldValues>();

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
  const onCreateTaskSubmit = () => {
    const formData = getValues();
    dispatch(
      addTask({
        id: Date.now().toString(36),
        text: formData.value,
        tag: formData.selectValue,
        checked: false,
      }),
    );
  };

  return {
    handleSubmit,
    register,
    errors,
    onSignInSubmit,
    onSignUpSubmit,
    onCreateTaskSubmit,
    control,
    getValues,
    setValue,
  };
};

export default useAuthForm;
