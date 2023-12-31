/* istanbul ignore file */
import { AvatarCellWrapper } from '../../common/table/cells/avatarCellWrapper';
import { DefaultCell } from '../../common/table/cells/defaultCell';
import { GridColDef } from '@mui/x-data-grid';
import { formatAsDeadlineDate } from '../../../utils/dateFunctions';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 310,
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
    width: 160,
    sortable: false,
    renderCell: (params) => {
      return <DefaultCell adressText={params.row.address} />;
    },
  },
  {
    field: 'createDate',
    headerName: 'Created At',
    width: 140,
    sortable: false,
    renderCell: (params) => {
      return <DefaultCell primaryText={formatAsDeadlineDate(params.row.createDate)} />;
    },
  },
];

export const sortingOptions = [
  { label: 'Name Asc', value: 'firstName-asc' },
  { label: 'Name Desc', value: 'firstName-desc' },
  { label: 'Create Date Asc', value: 'createDate-asc' },
  { label: 'Create Date Desc', value: 'createDate-desc' },
];
