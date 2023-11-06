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

interface IProps {
  items: (state: RootState) => ITicketState[] | IContactState[];
  total: (state: RootState) => number;
  fetch: FetchAthynkThunk;
  onDelete: DeleteAsyncThunk;
  columns: GridColDef[];
  sortingOptions: ISortingOptions[];
  priorityOptions?: string[];
  disabledFilter?: boolean;
  contactsForm?: boolean;
}

const Table: React.FC<IProps> = ({
  items,
  total,
  fetch,
  onDelete,
  columns,
  sortingOptions,
  priorityOptions,
  disabledFilter,
  contactsForm,
}) => {
  const dispatch = useAppDispatch();

  const storeItems = useSelector(items);
  const storeTotal = useSelector(total);

  const {
    searchParams,
    setSelectedPriorities,
    selectedPriorities,
    paginationModel,
    setPaginationModel,
  } = useTableSortAndFilter(fetch);

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
    await dispatch(onDelete({ id, apiUrl }));
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
                contactsForm={contactsForm}
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
            contactsForm={contactsForm}
          />
        </>
      )}
    </StyledBox>
  );
};

export default Table;
