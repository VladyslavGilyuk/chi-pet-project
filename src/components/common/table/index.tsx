import ActionCell from './cells/actionCell';
import AddEditContact from '../../modals/addEditContact';
import AddEditTicket from '../../modals/addEditTicket';
import CustomToolbar from './customToolbar';
import { GridColDef } from '@mui/x-data-grid';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import NotFound from '../../../assets/NotFound.jpg';
import { RootState } from '../../../store';
import { useTable } from './useTable';
import { DeleteAsyncThunk, FetchAthynkThunk } from './useTableSortAndFilter';
import { NoDataImage, StyledBox, StyledDataGrid } from './styled';
import { baseMenuCellConfig, pageSizeOptions } from './helper';

export interface ISortingOptions {
  label: string;
  value: string;
}

export enum EFormType {
  Contacts = 'Contacts',
  Tickets = 'Tickets',
}
export type DataSelector = (state: RootState) => {
  data: ITicketState[] | IContactState[];
  total: number;
};

interface IProps {
  storeData: DataSelector;
  fetchAction: FetchAthynkThunk;
  deleteAction: DeleteAsyncThunk;
  columns: GridColDef[];
  sortingOptions: ISortingOptions[];
  priorityOptions?: string[];
  disabledFilter?: boolean;
  formType: EFormType;
}

const Table: React.FC<IProps> = ({
  storeData,
  fetchAction,
  deleteAction,
  columns,
  sortingOptions,
  priorityOptions,
  disabledFilter,
  formType,
}) => {
  const {
    searchParams,
    data,
    total,
    selectedPriorities,
    setSelectedPriorities,
    paginationModel,
    setPaginationModel,
    handleUpdateItem,
    handleRemoveItem,
    isModalOpen,
    setIsModalOpen,
    selectedItem,
  } = useTable({ fetchAction, deleteAction, storeData });

  return (
    <StyledBox data-testid='table'>
      {data?.length > 0 ? (
        <StyledDataGrid
          autoHeight
          rows={data}
          rowHeight={92}
          columns={[
            ...columns,
            {
              ...baseMenuCellConfig,
              renderCell: (params) => {
                return (
                  <ActionCell
                    id={params.row.id}
                    apiUrl={`?${searchParams.toString()}`}
                    handleUpdateItem={handleUpdateItem}
                    handleRemoveItem={handleRemoveItem}
                  />
                );
              },
            },
          ]}
          paginationMode='server'
          rowCount={total}
          pageSizeOptions={pageSizeOptions}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
          disableColumnMenu
          slots={{
            toolbar: () => (
              <CustomToolbar
                apiUrl={`?${searchParams.toString()}`}
                selectedPriorities={selectedPriorities}
                setSelectedPriorities={setSelectedPriorities}
                sortingOptions={sortingOptions}
                priorityOptions={priorityOptions}
                disabledFilter={disabledFilter}
                formType={formType}
              />
            ),
          }}
        />
      ) : (
        <NoDataImage src={NotFound} alt='Not Found' data-testid='not_found_image' />
      )}
      {isModalOpen && (
        <>
          {formType === EFormType.Contacts ? (
            <AddEditContact
              apiUrl={`?${searchParams.toString()}`}
              toggleModal={() => setIsModalOpen(false)}
              initialValues={selectedItem}
              isOpen={isModalOpen}
              isEdit={true}
            />
          ) : (
            <AddEditTicket
              apiUrl={`?${searchParams.toString()}`}
              toggleModal={() => setIsModalOpen(false)}
              initialValues={selectedItem}
              isOpen={isModalOpen}
              isEdit={true}
            />
          )}
        </>
      )}
    </StyledBox>
  );
};

export default Table;
