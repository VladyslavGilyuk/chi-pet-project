import { UserState } from '../../types/user';
import { createSlice } from '@reduxjs/toolkit';
//import { signInAsync, singUpAsync } from '../../hooks/useAuthForm';

const initialState: UserState = {
  token: '',
  email: '',
  firstName: '',
  lastName: '',
  id: 0,
  error: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  /*
  extraReducers(builder) {
    builder.addCase(signInAsync.fulfilled, (state) => {
      return {
        ...state,
        error: false,
      };
    });
    builder.addCase(signInAsync.rejected, (state) => {
      console.log('Error rejected');
      state.error = true;
    });
    builder.addCase(singUpAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(singUpAsync.rejected, (state) => {
      state.error = true;
    });
  },
  */
});

export default userSlice.reducer;
