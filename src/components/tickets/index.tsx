import * as React from 'react';
import Box from '@mui/material/Box';
import Photo1 from '../../assets/t1.png';
import { Stack } from '@mui/material';
import { format } from 'date-fns';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { StyledStack, UserPhoto } from './styled';

//Function accepts Date object and returns a human-readable string in the format 'as of 25 May 2019, 09:41 PM'.
export const formatAsOnDate = (currentDate: Date) => {
  return format(currentDate, "'on' dd.MM.yyyy");
};
export const formatAsDate = (currentDate: Date) => {
  return format(currentDate, 'MMMM d, yyyy');
};
export const formatAsHours = (currentDate: Date) => {
  return format(currentDate, 'h:mm a');
};
export const updatedDifference = (currentDate: Date, updatedDate: Date) => {
  const timeDifference = Math.abs(currentDate.getTime() - updatedDate.getTime());
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};

const columns: GridColDef[] = [
  {
    field: 'ticket',
    headerName: 'Ticket Details',
    width: 500,
    renderCell: (params) => {
      return (
        <StyledStack>
          <Box> {params.row.photo && <UserPhoto src={params.row.photo} alt='userPhoto' />}</Box>
          <Box>
            <Box>{params.value}</Box>
            <Box>
              {' '}
              {params.row.updatedDate && (
                <Box>
                  Updated {updatedDifference(params.row.creationDate, params.row.updatedDate)} day
                  ago
                </Box>
              )}
            </Box>
          </Box>
        </StyledStack>
      );
    },
  },
  {
    field: 'customer',
    headerName: 'Customer name',
    width: 250,
    editable: true,
    renderCell: (params) => {
      return (
        <Stack>
          <span>{params.value}</span>
          <span>{params.row.createDate}</span>
        </Stack>
      );
    },
  },
  {
    field: 'deadlineDate',
    headerName: 'Date',
    width: 250,
    editable: true,
    renderCell: (params) => {
      return (
        <Stack>
          <span>{params.value}</span>
          <span>{params.row.deadlineHours}</span>
        </Stack>
      );
    },
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
  {
    id: 1,
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: formatAsOnDate(new Date('2019-05-24')),
    deadlineDate: formatAsDate(new Date('2019-05-26T18:30:00')),
    deadlineHours: formatAsHours(new Date('2019-05-26T18:30:00')),
    creationDate: new Date('2019-05-26T18:30:00'),
    updatedDate: new Date('2019-05-27T18:30:00'),
    priority: 'High',
    profileIcon: 'Icon',
    photo: Photo1,
  },
];

const TicketsTable = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default TicketsTable;
