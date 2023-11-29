import { RootState } from '..';
import { createSelector } from '@reduxjs/toolkit';

export const contacts = (state: RootState) => state.contacts.contacts;
export const total = (state: RootState) => state.contacts.total;
export const isLoading = (state: RootState) => state.contacts.loading;
export const contactsStore = createSelector(
  [contacts, total, isLoading],
  (data, total, isLoading) => ({
    data,
    total,
    isLoading,
  }),
);
