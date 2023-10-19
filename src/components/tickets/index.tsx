/* eslint-disable sort-imports */
import { StyledBox, StyledDataGrid, ViewButton } from './styled';
import { columns, rowsData } from './helper';
// eslint-disable-next-line sort-imports
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import TicketsModal from '../modals/tickets';
import { useCallback, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <TicketsModal toggleModal={toggleModal} />
          </>
        )}
      </GridToolbarContainer>
    );
  }
  return (
    <StyledBox>
      <StyledDataGrid
        autoHeight
        rows={[...rowsData]}
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
    </StyledBox>
  );
};

export default TicketsTable;
