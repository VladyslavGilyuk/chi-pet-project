import { AvatarCellWrapper } from '../common/table/cells/avatarCellWrapper';
import { DefaultCell } from '../common/table/cells/defaultCell';
import { GridColDef } from '@mui/x-data-grid';
import Tag from '../common/tags';

import {
  formatAsCreateDate,
  formatAsDeadlineDate,
  formatAsHoursDate,
} from '../../utils/dateFunctions';

export const columns: GridColDef[] = [
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
    width: 80,
    sortable: false,
    renderCell: (params) => {
      return <Tag text={params.value} />;
    },
  },
];

export const sortingOptions = [
  { label: 'Ticket Asc', value: 'ticket-asc' },
  { label: 'Ticket Desc', value: 'ticket-desc' },
  { label: 'Customer Asc', value: 'customer-asc' },
  { label: 'Customer Desc', value: 'customer-desc' },
  { label: 'Create Date Asc', value: 'createDate-asc' },
  { label: 'Create Date Desc', value: 'createDate-desc' },
  { label: 'Priority Asc', value: 'priority-asc' },
  { label: 'Priority Desc', value: 'priority-desc' },
];

export const priorityOptions = ['High', 'Normal', 'Low'];
