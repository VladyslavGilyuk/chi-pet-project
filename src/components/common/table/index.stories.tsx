/* eslint-disable @typescript-eslint/no-explicit-any */

import { EFormType } from './';
import { Provider } from 'react-redux';
import Table from './index';
import { store } from '../../../store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Table',
  component: Table,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path='/*' element={<Story />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockFetchAction = async () => {
  const mockApiResponse = [
    {
      id: '1',
      ticket: 'Contact Email not Linked',
      createdBy: {
        name: 'user',
        imageUrl: 'profilePhoto2',
        id: '2',
      },
      createDate: '2023-09-24T18:30:00.000Z',
      deadlineDate: '2023-09-26T18:30:00.000Z',
      updatedDate: '2023-11-01T18:25:32.652Z',
      priority: 'High',
      customer: 'Tom Cruise',
    },
    {
      id: '2',
      ticket: 'Adding Images to Featured Posts',
      createdBy: {
        name: 'user',
        imageUrl: 'profilePhoto2',
        id: '2',
      },
      createDate: '2023-09-24T18:30:00.000Z',
      deadlineDate: '2023-09-26T18:30:00.000Z',
      updatedDate: '2023-10-31T19:16:33.284Z',
      priority: 'Low',
      customer: 'Matt Damon',
    },
  ];

  return Promise.resolve(mockApiResponse);
};
export const Default: Story = {
  args: {
    storeData: () => ({
      data: [
        {
          id: '1',
          ticket: 'Contact Email not Linked',
          createdBy: {
            name: 'user',
            imageUrl: 'profilePhoto2',
            id: '2',
          },
          createDate: '2023-09-24T18:30:00.000Z',
          deadlineDate: '2023-09-26T18:30:00.000Z',
          updatedDate: '2023-11-01T18:25:32.652Z',
          priority: 'High',
          customer: 'Tom Cruise',
        },
        {
          id: '2',
          ticket: 'Adding Images to Featured Posts',
          createdBy: {
            name: 'user',
            imageUrl: 'profilePhoto2',
            id: '2',
          },
          createDate: '2023-09-24T18:30:00.000Z',
          deadlineDate: '2023-09-26T18:30:00.000Z',
          updatedDate: '2023-10-31T19:16:33.284Z',
          priority: 'Low',
          customer: 'Matt Damon',
        },
      ],
      total: 2,
      isLoading: false,
    }),
    fetchAction: mockFetchAction as any,
    deleteAction: mockFetchAction as any,
    columns: [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'email', headerName: 'Email', width: 300 },
    ],
    sortingOptions: [
      { label: 'Name (A-Z)', value: 'nameAsc' },
      { label: 'Name (Z-A)', value: 'nameDesc' },
    ],
    priorityOptions: ['High', 'Medium', 'Low'],
    disabledFilter: false,
    formType: EFormType.Tickets,
  },
};
