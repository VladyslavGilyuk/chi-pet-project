import ActionCell from './cells/actionCell';
import CustomModal from '../../modals/customModal';
import CustomToolbar from './customToolbar';
import { GridColDef } from '@mui/x-data-grid';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { RootState } from '../../../store';
import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { DeleteAsyncThunk, FetchAthynkThunk, useTableSortAndFilter } from './useTableSortAndFilter';
import { StyledBox, StyledDataGrid } from './styled';
import { baseMenuCellConfig, pageSizeOptions } from './helper';
import { useCallback, useState } from 'react';

export interface ISortingOptions {
  label: string;
  value: string;
}

export enum EFormType {
  Contacts = 'Contacts',
  Tickets = 'Tickets',
}
type DataSelector = (state: RootState) => {
  storeItems: ITicketState[] | IContactState[];
  storeTotal: number;
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
  const dispatch = useAppDispatch();

  const { storeItems, storeTotal } = useSelector(storeData);

  const {
    searchParams,
    setSelectedPriorities,
    selectedPriorities,
    paginationModel,
    setPaginationModel,
  } = useTableSortAndFilter(fetchAction);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITicketState | IContactState | null>(null);

  const handleUpdateItem = useCallback(
    (id?: string) => {
      const itemToEdit =
        (storeItems as (ITicketState | IContactState)[])?.find((item) => item.id === id) || null;
      setSelectedItem(itemToEdit);
      setIsModalOpen(true);
    },
    [storeItems],
  );

  const handleRemoveItem = useCallback(async (id: string, apiUrl: string) => {
    await dispatch(deleteAction({ id, apiUrl }));
  }, []);

  return (
    <StyledBox>
      {storeItems?.length > 0 && (
        <StyledDataGrid
          autoHeight
          rows={storeItems}
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
          rowCount={storeTotal}
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
      )}
      {isModalOpen && (
        <>
          <CustomModal
            apiUrl={`?${searchParams.toString()}`}
            toggleModal={() => setIsModalOpen(false)}
            initialValues={selectedItem}
            isOpen={isModalOpen}
            isEdit={true}
            formType={formType}
          />
        </>
      )}
    </StyledBox>
  );
};

export default Table;
