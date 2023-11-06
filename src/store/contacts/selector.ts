import { RootState } from '..';

export const contacts = (state: RootState) => state.contacts.contacts;
export const total = (state: RootState) => state.contacts.total;
