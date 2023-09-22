import { UserState } from '..';

export const selectUser = (state: { user: UserState }) => state.user.user;
