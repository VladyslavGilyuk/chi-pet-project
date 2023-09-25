import { UserState } from '../../types/user';
import { createSlice } from '@reduxjs/toolkit';
import { signInAsync, signUpAsync } from './actions';

const initialState: UserState = {
  token: '',
  email: '',
  firstName: '',
  lastName: '',
  id: 0,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signInAsync.fulfilled, (state, action) => {
      const responseData = action.payload;
      return {
        ...state,
        token: responseData.accessToken,
        ...responseData.user,
      };
    });
    builder.addCase(signUpAsync.fulfilled, (state, action) => {
      const responseData = action.payload;
      return {
        ...state,
        token: responseData.accessToken,
        ...responseData.user,
      };
    });
  },
});

export default userSlice.reducer;
