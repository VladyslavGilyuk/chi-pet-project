import { IUserState } from '../../types/user';
import { createSlice } from '@reduxjs/toolkit';
import { signInAsync, signUpAsync } from './thunk';

const initialState: IUserState = {
  token: '',
  email: '',
  firstName: '',
  lastName: '',
  id: null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(signInAsync.fulfilled, (state, action) => {
      const responseData = action.payload;
      if (responseData) {
        return {
          token: responseData.accessToken,
          ...responseData.user,
        };
      }
    });
    builder.addCase(signUpAsync.fulfilled, (state, action) => {
      const responseData = action.payload;
      if (responseData) {
        return {
          token: responseData.accessToken,
          ...responseData.user,
        };
      }
    });
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
