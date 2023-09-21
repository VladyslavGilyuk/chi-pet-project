import { createSlice } from '@reduxjs/toolkit';
interface UserState {
  user: {
    email: string;
    token: string;
  };
}

const initialState: UserState = {
  user: {
    email: '',
    token: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user.user;
export default userSlice.reducer;
