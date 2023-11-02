import CustomToolbar from './customToolbar';
import { ITicketState } from '../../types/tickets';
import MenuCell from './cells/menuCell';
import TicketsModal from '../modals/tickets';
import { deleteTicketAsync } from '../../store/tickets/thunk';
import { useAppDispatch } from '../../store/hooks';
import { useSelector } from 'react-redux';
import { useTableSortAndFilter } from './useTableSort';
import { StyledBox, StyledDataGrid } from './styled';
import { baseMenuCellConfig, columns, pageSizeOptions } from './helper';
import { tickets, totalRows } from '../../store/tickets/selector';
import { useCallback, useEffect, useState } from 'react';

const TicketsTable = () => {
  const dispatch = useAppDispatch();

  const {
    searchParams,
    fetchTickets,
    setSelectedPriorities,
    selectedPriorities,
    paginationModel,
    setPaginationModel,
  } = useTableSortAndFilter();

  useEffect(() => {
    fetchTickets();
  }, [searchParams, selectedPriorities.length]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<ITicketState | null>(null);

  const storeTickets = useSelector(tickets);
  const storeTotalRows = useSelector(totalRows);

  const handleUpdateItem = useCallback(
    (id?: string) => {
      setSelectedTicket(storeTickets?.find((ticket) => ticket.id === id) || null);
      setIsModalOpen(true);
    },

    [storeTickets.length],
  );

  const handleRemoveItem = useCallback(async (rowId: string) => {
    await dispatch(deleteTicketAsync(rowId));
  }, []);

  return (
    <StyledBox>
      {storeTickets?.length > 0 && (
        <StyledDataGrid
          autoHeight
          rows={storeTickets}
          rowHeight={92}
          columns={[
            ...columns,
            {
              ...baseMenuCellConfig,
              renderCell: (params) => {
                return (
                  <MenuCell
                    id={params.row.id}
                    handleUpdateItem={handleUpdateItem}
                    handleRemoveItem={handleRemoveItem}
                  />
                );
              },
            },
          ]}
          paginationMode='server'
          rowCount={storeTotalRows}
          pageSizeOptions={pageSizeOptions}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
          disableColumnMenu
          slots={{
            toolbar: () => (
              <CustomToolbar
                selectedPriorities={selectedPriorities}
                setSelectedPriorities={setSelectedPriorities}
              />
            ),
          }}
        />
      )}
      {isModalOpen && (
        <>
          <TicketsModal
            toggleModal={() => setIsModalOpen(false)}
            initialValues={selectedTicket}
            isEdit={true}
          />
        </>
      )}
    </StyledBox>
  );
};

export default TicketsTable;
