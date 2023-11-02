import { DefaultCell } from './cells/defaultCell';
import { GridColDef } from '@mui/x-data-grid';
import Tag from '../common/tags';
import { TicketCell } from './cells/ticketCell';
import {
  formatAsCreateDate,
  formatAsDeadlineDate,
  formatAsHoursDate,
} from '../../utils/dateFunctions';

export const columns: GridColDef[] = [
  {
    field: 'ticket',
    headerName: 'Ticket details',
    width: 450,
    sortable: false,
    renderCell: (params) => {
      return (
        <TicketCell>
          <DefaultCell
            primaryText={params.value}
            secondaryText={formatAsCreateDate(params.row.updatedDate)}
          />
        </TicketCell>
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
    width: 170,
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
    width: 110,
    sortable: false,
    renderCell: (params) => {
      return <Tag text={params.value} />;
    },
  },
];

export const pageSizeOptions = [5, 8, 10, 25];
export const baseMenuCellConfig = { field: 'menu', headerName: '', width: 15, sortable: false };
