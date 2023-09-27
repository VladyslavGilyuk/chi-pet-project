import { Notify } from '../../utils/notify';
import UserService from '../../service/UserService';
import { UserState } from '../../types/user';
import { ISignIn, ISignUpAsync } from '../../types/auth';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setUser = createAction<UserState>('user/setUser');

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
