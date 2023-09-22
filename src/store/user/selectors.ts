import { UserState } from '../../types/user';

export const selectUser = (state: { user: UserState }) => state.user.user;
