import { AxiosError } from 'axios';
import { SubmitHandler } from 'react-hook-form';
import UserService from '../service/UserService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser } from '../store/user/actions';
import { useAppDispatch } from '../store';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ICommonFieldValues, ISignIn, ISignUp } from '../types/auth';

export const signInAsync = createAsyncThunk('auth/signIn', async (data: ISignIn, { dispatch }) => {
  try {
    const response = await UserService.login(data);
    const responseData = response.data;

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
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 400) {
      alert('Invalid email or password');
    } else if (axiosError.response && axiosError.response.status === 500) {
      alert('Server error: Please try again later.');
    } else {
      alert('An error occurred. Please try again later.');
    }
    throw error;
  }
});

export const singUpAsync = createAsyncThunk('auth/signUp', async (data: ISignUp, { dispatch }) => {
  try {
    const response = await UserService.register(data);
    const responseData = response.data;

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
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 400) {
      alert('Invalid email or password');
    } else if (axiosError.response && axiosError.response.status === 500) {
      alert('Server error: Please try again later.');
    } else {
      alert('An error occurred. Please try again later.');
    }
    throw error;
  }
});

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
      const action = await dispatch(singUpAsync(data));
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
