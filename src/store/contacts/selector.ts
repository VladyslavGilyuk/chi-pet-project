import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const contacts = (state: RootState) => state.contacts.contacts;
export const total = (state: RootState) => state.contacts.total;
export const contactsStore = createSelector([contacts, total], (data, total) => ({
  data,
  total,
}));
