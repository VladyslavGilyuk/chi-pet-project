import { AvatarCellWrapper } from './cells/avatarCellWrapper';
import { DefaultCell } from './cells/defaultCell';
import { GridColDef } from '@mui/x-data-grid';
import { formatAsDeadlineDate } from '../../../utils/dateFunctions';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 380,
    sortable: false,
    renderCell: (params) => {
      return (
        <AvatarCellWrapper>
          <DefaultCell primaryText={params.row.firstName + ' ' + params.row.lastName} />
        </AvatarCellWrapper>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    sortable: false,
    renderCell: (params) => {
      return <DefaultCell primaryText={params.row.email} />;
    },
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 200,
    sortable: false,
    renderCell: (params) => {
      return <DefaultCell adressText={params.row.address} />;
    },
  },
  {
    field: 'createDate',
    headerName: 'Created At',
    width: 130,
    sortable: false,
    renderCell: (params) => {
      return <DefaultCell primaryText={formatAsDeadlineDate(params.row.createDate)} />;
    },
  },
];

export const pageSizeOptions = [5, 8, 10, 25];
export const baseMenuCellConfig = { field: 'menu', headerName: '', width: 15, sortable: false };
