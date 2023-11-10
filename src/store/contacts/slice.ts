import { IContactState } from '../../types/contacts';
import { createSlice } from '@reduxjs/toolkit';
import { deleteContactAsync, fetchContactAsync, updateContactAsync } from './thunk';
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
      const updatedContact = action.payload;
      const index = state.contacts.findIndex((t) => t.id === updatedContact.id);

      if (index !== -1) {
        state.contacts[index] = updatedContact;
      }
    });
    builder.addCase(deleteContactAsync.fulfilled, (state, action) => {
      const deletedContact = action.payload;
      state.contacts = state.contacts.filter((t) => t.id !== deletedContact.id);
    });
  },
});

export default contactsSlice.reducer;
