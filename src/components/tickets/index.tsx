import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SubmitHandler } from 'react-hook-form';
import TicketService from '../../service/TicketService';
import TicketsModal from '../modals/tickets';
import { columns } from './helper';
import { useAppDispatch } from '../../store/hooks';
import { useQuery } from 'react-query';
import { Button, MenuItem, Stack } from '@mui/material';
import { CustomSelect, StyledBox, StyledDataGrid, ViewButton } from './styled';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { ITickets, IUpdateTickets } from '../../types/tickets';
import { createTicketAsync, deleteTicketAsync, updateTicketAsync } from '../../store/tickets/thunk';
import { useCallback, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [paramsId, setParamsId] = useState('');

  const { data: ticketsData, refetch } = useQuery('tickets', TicketService.get);

  const dispatch = useAppDispatch();

  const reversedTicketsData = ticketsData ? [...ticketsData.data].reverse() : null;

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const toggleUpdateModal = useCallback((id?: string) => {
    setIsUpdateModalOpen((prev) => !prev);
    id && setParamsId(id);
  }, []);

  const handleEditClick: SubmitHandler<IUpdateTickets> = async (data: IUpdateTickets) => {
    const body = { ...data };
    await dispatch(updateTicketAsync({ id: paramsId, data: body }));
    refetch();
    toggleUpdateModal();
  };

  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    refetch();
    toggleModal();
  };

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <ViewButton onClick={toggleModal}>Add Ticket</ViewButton>
        {isModalOpen && (
          <>
            <TicketsModal
              toggleModal={toggleModal}
              handleForm={handleCreateTicket}
              refetchTickets={refetch}
              initialValues={null}
            />
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
          columns={[
            ...columns,
            {
              field: 'menu',
              headerName: '',
              width: 15,
              sortable: false,
              renderCell: (params) => {
                const handleDeleteClick = async (rowId: string) => {
                  await dispatch(deleteTicketAsync(rowId));
                  refetch();
                };

                return (
                  <>
                    <Stack>
                      <CustomSelect IconComponent={MoreVertIcon}>
                        <MenuItem>
                          <Button onClick={() => toggleUpdateModal(params.row.id)}>Edit</Button>
                        </MenuItem>
                        <MenuItem>
                          <Button onClick={() => handleDeleteClick(params.row.id)}>Delete</Button>
                        </MenuItem>
                      </CustomSelect>
                    </Stack>
                  </>
                );
              },
            },
          ]}
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
      {isUpdateModalOpen && (
        <>
          <TicketsModal
            toggleModal={toggleUpdateModal}
            handleForm={handleEditClick}
            refetchTickets={refetch}
            initialValues={reversedTicketsData?.find((ticket) => ticket.id === paramsId)}
          />
        </>
      )}
    </StyledBox>
  );
};

export default TicketsTable;
