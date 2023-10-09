import { Notify } from '../../utils/notify';
import UserService from '../../service/UserService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignIn, ISignUpAsync } from '../../types/auth';

export const signInAsync = createAsyncThunk('auth/signIn', async (data: ISignIn) => {
  return UserService.login(data)
    .then((response) => {
      const responseData = response.data;
      if (responseData) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: responseData.accessToken,
            ...responseData.user,
          }),
        );
      }
      return responseData;
    })
    .catch(() => {
      Notify('Invalid email or password');
    });
});

export const signUpAsync = createAsyncThunk('auth/signUp', async (data: ISignUpAsync) => {
  return UserService.register(data)
    .then((response) => {
      const responseData = response.data;
      if (responseData) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: responseData.accessToken,
            ...responseData.user,
          }),
        );
      }
      return responseData;
    })
    .catch(() => {
      Notify('Sign up error');
    });
});
