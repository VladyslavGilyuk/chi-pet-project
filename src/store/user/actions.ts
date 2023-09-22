import { UserState } from '..';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction<UserState>('user/setUser');
