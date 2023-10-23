import TicketService from '../../service/TicketService';
import TicketsModal from '../modals/tickets';
import { columns } from './helper';
import { useQuery } from 'react-query';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { StyledBox, StyledDataGrid, ViewButton } from './styled';
import { useCallback, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: ticketsData, refetch } = useQuery('tickets', TicketService.get);
  const reversedTicketsData = ticketsData ? [...ticketsData.data].reverse() : null;
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <ViewButton onClick={toggleModal}>Add Ticket</ViewButton>
        {isModalOpen && (
          <>
            <TicketsModal toggleModal={toggleModal} refetchTickets={refetch} />
          </>
        )}
      </GridToolbarContainer>
    );
  }
  return (
    <StyledBox>
      {reversedTicketsData && (
        <StyledDataGrid
          autoHeight
          rows={reversedTicketsData}
          rowHeight={92}
          columns={[...columns]}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } },
          }}
          pageSizeOptions={[5, 8, 10, 25]}
          disableRowSelectionOnClick
          disableColumnMenu
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      )}
    </StyledBox>
  );
};

export default TicketsTable;
