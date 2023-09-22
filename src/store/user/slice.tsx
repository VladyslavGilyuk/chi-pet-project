import { UserState } from '..';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserState = {
  user: {
    email: '',
    token: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
