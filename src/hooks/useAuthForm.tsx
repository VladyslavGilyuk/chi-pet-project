import { AppDispatch } from '../store';
import axios from '../utils/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../store/user/actions';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
export const signInAsync = createAsyncThunk('auth/signIn', async (data: ISignIn) => {
  const response = await axios.post('/login', data);
  return response.data;
});

export const singUpAsync = createAsyncThunk('auth/signUp', async (data: ISignUp) => {
  const response = await axios.post('/register', data);
  return response.data;
});

const useAuthForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CommonFieldValues>();

  const onSignInSubmit: SubmitHandler<ISignIn> = (data: ISignIn) => {
    dispatch(signInAsync(data))
      .then((action) => {
        const responseData = action.payload;
        dispatch(
          setUser({
            token: responseData.accessToken,
            ...responseData.user,
          }),
        );
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: responseData.accessToken,
            ...responseData.user,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        if (error.response.data === 'Cannot find user') {
          alert('Invalid email');
        } else if (error.response.data === 'Incorrect password') {
          alert('Incorrect password');
        } else {
          console.error('Error:', error);
        }
      });
  };

  const onSignUpSubmit: SubmitHandler<ISignUp> = (data: ISignUp) => {
    dispatch(singUpAsync(data))
      .then((action) => {
        const responceData = action.payload;
        dispatch(
          setUser({
            token: responceData.accessToken,
            ...responceData.user,
          }),
        );
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: responceData.accessToken,
            ...responceData.user,
          }),
        );
        navigate('/');
      })
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
