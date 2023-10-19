import { GridColDef } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tag from '../common/tags';
import profilePhoto1 from '../../assets/images/profilePhoto1.png';
import profilePhoto2 from '../../assets/images/profilePhoto2.png';
import profilePhoto3 from '../../assets/images/profilePhoto3.png';
import profilePhoto4 from '../../assets/images/profilePhoto4.png';
import profilePhoto5 from '../../assets/images/profilePhoto5.png';
import profilePhoto6 from '../../assets/images/profilePhoto6.png';
import profilePhoto7 from '../../assets/images/profilePhoto7.png';
import profilePhoto8 from '../../assets/images/profilePhoto8.png';
import { v4 as uuidv4 } from 'uuid';
import { Box, IconButton, Stack } from '@mui/material';
import { StyledHeading, StyledStack, StyledText, UserPhoto } from './styled';
import {
  formatAsCreateDate,
  formatAsDedlineDate,
  formatAsHoursDate,
  updatedDifference,
} from '../../utils/dateFunctions';

interface ITicketRowData {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date;
  deadlineDate: Date;
  updatedDate: Date;
  priority: string;
  profilePhoto: string;
}

export const columns: GridColDef[] = [
  {
    field: 'ticket',
    headerName: 'Ticket details',
    width: 450,
    sortable: false,
    renderCell: (params) => {
      return (
        <StyledStack>
          <UserPhoto src={params.row.profilePhoto} alt='userPhoto' />
          <Box>
            <StyledHeading>{params.value}</StyledHeading>
            <Box>
              <StyledText>Updated {updatedDifference(params.row.updatedDate)} days ago</StyledText>
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
          <StyledHeading>{formatAsDedlineDate(params.value)}</StyledHeading>
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
  {
    field: 'menu',
    headerName: '',
    width: 15,
    sortable: false,
    renderCell: () => {
      return (
        <Stack>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      );
    },
  },
];

export const rowsData: ITicketRowData[] = [
  {
    id: uuidv4(),
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: new Date('2023-09-24T18:30:00'),
    deadlineDate: new Date('2023-09-26T18:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'Adding Images to Featured Posts',
    customer: 'Matt Damon',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T08:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto2,
  },
  {
    id: uuidv4(),
    ticket: 'When will I be charged this month?',
    customer: 'Robert Downey',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T07:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto3,
  },
  {
    id: uuidv4(),
    ticket: 'Payment not going through',
    customer: 'Christian Bale',
    createDate: new Date('2023-09-24T17:00:00'),
    deadlineDate: new Date('2023-09-25T17:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto4,
  },
  {
    id: uuidv4(),
    ticket: 'Unable to add replies',
    customer: 'Henry Cavil',
    createDate: new Date('2023-09-24T16:00:00'),
    deadlineDate: new Date('2023-09-25T16:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto5,
  },
  {
    id: uuidv4(),
    ticket: 'Downtime since last week',
    customer: 'Chris Evans',
    createDate: new Date('2023-09-23T14:00:00'),
    deadlineDate: new Date('2023-09-25T14:00:00'),
    updatedDate: new Date('2023-09-25T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto6,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-24T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto7,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto8,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto2,
  },
  {
    id: uuidv4(),
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: new Date('2023-09-24T18:30:00'),
    deadlineDate: new Date('2023-09-26T18:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'Adding Images to Featured Posts',
    customer: 'Matt Damon',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T08:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto2,
  },
  {
    id: uuidv4(),
    ticket: 'When will I be charged this month?',
    customer: 'Robert Downey',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T07:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto3,
  },
  {
    id: uuidv4(),
    ticket: 'Payment not going through',
    customer: 'Christian Bale',
    createDate: new Date('2023-09-24T17:00:00'),
    deadlineDate: new Date('2023-09-25T17:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto4,
  },
  {
    id: uuidv4(),
    ticket: 'Unable to add replies',
    customer: 'Henry Cavil',
    createDate: new Date('2023-09-24T16:00:00'),
    deadlineDate: new Date('2023-09-25T16:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto5,
  },
  {
    id: uuidv4(),
    ticket: 'Downtime since last week',
    customer: 'Chris Evans',
    createDate: new Date('2023-09-23T14:00:00'),
    deadlineDate: new Date('2023-09-25T14:00:00'),
    updatedDate: new Date('2023-09-25T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto6,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-24T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto7,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto8,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto2,
  },
  {
    id: uuidv4(),
    ticket: 'Contact Email not Linked',
    customer: 'Tom Cruise',
    createDate: new Date('2023-09-24T18:30:00'),
    deadlineDate: new Date('2023-09-26T18:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'Adding Images to Featured Posts',
    customer: 'Matt Damon',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T08:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto2,
  },
  {
    id: uuidv4(),
    ticket: 'When will I be charged this month?',
    customer: 'Robert Downey',
    createDate: new Date('2023-09-24'),
    deadlineDate: new Date('2023-09-26T07:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto3,
  },
  {
    id: uuidv4(),
    ticket: 'Payment not going through',
    customer: 'Christian Bale',
    createDate: new Date('2023-09-24T17:00:00'),
    deadlineDate: new Date('2023-09-25T17:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto4,
  },
  {
    id: uuidv4(),
    ticket: 'Unable to add replies',
    customer: 'Henry Cavil',
    createDate: new Date('2023-09-24T16:00:00'),
    deadlineDate: new Date('2023-09-25T16:00:00'),
    updatedDate: new Date('2023-09-26T18:30:00'),
    priority: 'High',
    profilePhoto: profilePhoto5,
  },
  {
    id: uuidv4(),
    ticket: 'Downtime since last week',
    customer: 'Chris Evans',
    createDate: new Date('2023-09-23T14:00:00'),
    deadlineDate: new Date('2023-09-25T14:00:00'),
    updatedDate: new Date('2023-09-25T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto6,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-24T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto7,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto8,
  },
  {
    id: uuidv4(),
    ticket: 'Referral Bonus',
    customer: 'Sam Smith',
    createDate: new Date('2023-09-22T11:30:00'),
    deadlineDate: new Date('2023-09-25T11:30:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Low',
    profilePhoto: profilePhoto1,
  },
  {
    id: uuidv4(),
    ticket: 'How do I change my password?',
    customer: 'Steve Rogers',
    createDate: new Date('2023-09-21T13:00:00'),
    deadlineDate: new Date('2023-09-24T13:00:00'),
    updatedDate: new Date('2023-09-27T18:30:00'),
    priority: 'Normal',
    profilePhoto: profilePhoto2,
  },
];
