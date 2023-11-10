import ContactService from '../../service/ContactService';
import { IUserState } from '../../types/user';
import { Notify } from '../../utils/notify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IContacts, IUpdateContacts } from '../../types/contacts';

export const fetchContactAsync = createAsyncThunk(
  'contacts/fetchContact',
  async (apiUrl: string) => {
    try {
      const response = await ContactService.getAll(apiUrl);
      const data = response.data;
      const totalCount = parseInt(response.headers['x-total-count']);

      return { data, totalCount };
    } catch (error) {
      Notify('Something went wrong');
    }
  },
);
export const createContactAsync = createAsyncThunk(
  'contacts/createContact',
  async (
    { apiUrl, data, user }: { apiUrl: string; data: IContacts; user: IUserState },
    thunkAPI,
  ) => {
    const { dispatch } = thunkAPI;
    const transformedData = {
      ...data,
      createDate: new Date(),
      createdBy: {
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: 'profilePhoto1.png',
        id: user.id?.toString(),
      },
    };

    try {
      const response = await ContactService.create(transformedData);
      await dispatch(fetchContactAsync(apiUrl));
      return response.data;
    } catch (error) {
      Notify('Something went wrong');
    }
  },
);

export const updateContactAsync = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, data }: { id: string; data: IUpdateContacts }) => {
    try {
      const response = await ContactService.update(id, data);
      return response.data;
    } catch (error) {
      Notify('Something went wrong');
    }
  },
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, apiUrl }: { id: string; apiUrl: string }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const response = await ContactService.delete(id);
      await dispatch(fetchContactAsync(apiUrl));
      return response;
    } catch (error) {
      Notify('Something went wrong');
    }
  },
);
