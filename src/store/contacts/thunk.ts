import ContactService from '../../service/ContactService';
import { Notify } from '../../utils/notify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
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
  async ({ apiUrl, data }: { apiUrl: string; data: IContacts }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const transformedData = {
      ...data,
      createDate: new Date(),
      createdBy: {
        name: 'userName', //replace with actual data of user
        imageUrl: 'profilePhoto1.png',
        id: uuidv4(),
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
