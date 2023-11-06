/* eslint-disable sort-imports */
import { IContactState } from '../../types/contacts';
import { deleteContactAsync, fetchContactAsync, updateContactAsync } from './thunk';
import { createSlice } from '@reduxjs/toolkit';

interface IContactSliceState {
  contacts: IContactState[];
  total: number;
}

const initialState: IContactSliceState = {
  contacts: [],
  total: 0,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContactAsync.fulfilled, (state, action) => {
      if (action.payload) {
        state.total = action.payload.totalCount;
        state.contacts = action.payload.data;
      }
    });
    builder.addCase(updateContactAsync.fulfilled, (state, action) => {
      const updatedTicket = action.payload;
      const index = state.contacts.findIndex((t) => t.id === updatedTicket.id);

      if (index !== -1) {
        state.contacts[index] = updatedTicket;
      }
    });
    builder.addCase(deleteContactAsync.fulfilled, (state, action) => {
      const deletedTicket = action.payload;
      state.contacts = state.contacts.filter((t) => t.id !== deletedTicket.id);
    });
  },
});

export default contactsSlice.reducer;
