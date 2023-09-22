import { UserState } from '../../types/user';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction<UserState>('user/setUser');
