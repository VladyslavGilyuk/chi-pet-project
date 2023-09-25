import UserService from '../../service/UserService';
import { UserState } from '../../types/user';
import { ISignIn, ISignUp } from '../../types/auth';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setUser = createAction<UserState>('user/setUser');

export const signInAsync = createAsyncThunk('auth/signIn', async (data: ISignIn) => {
  try {
    const response = await UserService.login(data);
    const responseData = response.data;
    console.log(responseData);
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
  } catch (error) {
    console.log(error);
    alert('An error occurred. Please try again later.');
  }
});

export const signUpAsync = createAsyncThunk('auth/signUp', async (data: ISignUp) => {
  try {
    const response = await UserService.register(data);
    const responseData = response.data;
    console.log(responseData);
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
  } catch (error) {
    console.log(error);
    alert('An error occurred. Please try again later.');
  }
});
