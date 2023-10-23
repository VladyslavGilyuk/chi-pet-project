import { createSlice } from '@reduxjs/toolkit';
import { createTicketAsync } from './thunk';

const initialState = {
  id: '',
  ticket: '',
  customer: '',
  createDate: '',
  deadlineDate: '',
  updatedDate: '',
  priority: '',
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createTicketAsync.fulfilled, (state, action) => {
      const responseData = action.payload;
      if (responseData) {
        return {
          ...responseData,
        };
      }
    });
  },
});

export default ticketsSlice.reducer;
