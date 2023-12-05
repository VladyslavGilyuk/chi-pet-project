import { AvatarCellWrapper } from './cells/avatarCellWrapper';
import { DefaultCell } from './cells/defaultCell';
import { EFormType } from './';
import { Provider } from 'react-redux';
import Table from './index';
import Tag from '../tags';
import { store } from '../../../store';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import { deleteTicketAsync, fetchTicketAsync } from '../../../store/tickets/thunk';
import {
  formatAsCreateDate,
  formatAsDeadlineDate,
  formatAsHoursDate,
} from '../../../utils/dateFunctions';

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
    fetchAction: fetchTicketAsync,
    deleteAction: deleteTicketAsync,
    columns: [
      {
        field: 'ticket',
        headerName: 'Ticket details',
        width: 420,
        sortable: false,
        renderCell: (params) => {
          return (
            <AvatarCellWrapper>
              <DefaultCell
                primaryText={params.value}
                secondaryText={formatAsCreateDate(params.row.updatedDate)}
              />
            </AvatarCellWrapper>
          );
        },
      },
      {
        field: 'customer',
        headerName: 'Customer name',
        width: 210,
        sortable: false,
        renderCell: (params) => {
          return (
            <DefaultCell
              primaryText={params.row.customer}
              secondaryText={formatAsCreateDate(params.row.createDate)}
            />
          );
        },
      },
      {
        field: 'deadlineDate',
        headerName: 'Date',
        width: 150,
        sortable: false,
        renderCell: (params) => {
          return (
            <DefaultCell
              primaryText={formatAsDeadlineDate(params.row.deadlineDate)}
              secondaryText={formatAsHoursDate(params.row.deadlineDate)}
            />
          );
        },
      },
      {
        field: 'priority',
        headerName: 'Priority',
        width: 85,
        sortable: false,
        renderCell: (params) => {
          return <Tag text={params.value} />;
        },
      },
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

export const WithoutFilter: Story = {
  args: {
    ...Default.args,
    disabledFilter: true,
  },
};

export const EmptyTable: Story = {
  args: {
    ...Default.args,
    storeData: () => ({
      data: [],
      total: 0,
      isLoading: false,
    }),
  },
};
