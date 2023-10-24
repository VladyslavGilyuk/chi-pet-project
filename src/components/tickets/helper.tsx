import { GridColDef } from '@mui/x-data-grid';
import Tag from '../common/tags';
import profilePhoto1 from '../../assets/images/profilePhoto1.png';
import { Box, Stack } from '@mui/material';
import { StyledHeading, StyledStack, StyledText, UserPhoto } from './styled';
import {
  formatAsCreateDate,
  formatAsDeadlineDate,
  formatAsHoursDate,
  updatedDifference,
} from '../../utils/dateFunctions';

export const columns: GridColDef[] = [
  {
    field: 'ticket',
    headerName: 'Ticket details',
    width: 450,
    sortable: false,
    renderCell: (params) => {
      return (
        <StyledStack>
          <UserPhoto src={profilePhoto1} alt='userPhoto' />
          <Box>
            <StyledHeading>{params.value}</StyledHeading>
            <Box>
              <StyledText>{updatedDifference(params.row.updatedDate)}</StyledText>
            </Box>
          </Box>
        </StyledStack>
      );
    },
  },
  {
    field: 'customer',
    headerName: 'Customer name',
    width: 230,
    sortable: false,
    renderCell: (params) => {
      return (
        <Stack>
          <StyledHeading>{params.value}</StyledHeading>
          <StyledText>{formatAsCreateDate(params.row.createDate)}</StyledText>
        </Stack>
      );
    },
  },
  {
    field: 'deadlineDate',
    headerName: 'Date',
    width: 170,
    sortable: false,
    renderCell: (params) => {
      return (
        <Stack>
          <StyledHeading>{formatAsDeadlineDate(params.row.deadlineDate)}</StyledHeading>
          <StyledText>{formatAsHoursDate(params.row.deadlineDate)}</StyledText>
        </Stack>
      );
    },
  },
  {
    field: 'priority',
    headerName: 'Priority',
    width: 110,
    sortable: false,
    renderCell: (params) => {
      return <Tag text={params.value} />;
    },
  },
];
