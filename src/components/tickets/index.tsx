import CustomToolbar from './customToolbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import TicketService from '../../service/TicketService';
import TicketsModal from '../modals/tickets';
import { useAppDispatch } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { CustomSelect, StyledBox, StyledDataGrid, StyledMenuItem } from './styled';
import { ITicketInitialValues, IUpdateTickets } from '../../types/tickets';
import { columns, pageSizeOptions } from './helper';
import { deleteTicketAsync, updateTicketAsync } from '../../store/tickets/thunk';
import { useCallback, useEffect, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [paramsId, setParamsId] = useState('');
  const [ticketsData, setTicketsData] = useState<ITicketInitialValues[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const _sort = searchParams.get('_sort');
  const _order = searchParams.get('_order');
  const priority = searchParams.getAll('priority');
  const _page = searchParams.get('_page');
  const pageSize = searchParams.get('pageSize');
  const createDate_gte = searchParams.get('createDate_gte');
  const createDate_lte = searchParams.get('createDate_lte');

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(priority);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize ? parseInt(pageSize) : 8,
    page: _page ? parseInt(_page) : 0,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchTickets();
  }, [_sort, _order, _page, paginationModel, createDate_gte, createDate_lte, selectedPriorities]);

  const buildApiUrl = () => {
    setSearchParams((params) => {
      params.delete('priority');
      selectedPriorities.forEach((p) => {
        params.append('priority', p);
      });
      params.set('_page', paginationModel.page.toString());
      params.set('pageSize', paginationModel.pageSize.toString());

      return params;
    });

    let apiUrl = `?_sort=${_sort || ''}&_order=${_order || ''}`;

    apiUrl += selectedPriorities.length
      ? selectedPriorities.map((priority) => `&priority=${priority}`).join('')
      : '';

    apiUrl +=
      createDate_gte && createDate_lte
        ? `&createDate_gte=${createDate_gte}&createDate_lte=${createDate_lte}`
        : '';

    return apiUrl;
  };

  const fetchTickets = async () => {
    try {
      const apiUrl = buildApiUrl();
      const response = await TicketService.get(apiUrl);
      setTicketsData(response.data);
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  };

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
    fetchTickets();
    toggleUpdateModal();
  };

  const handleDeleteClick = async (rowId: string) => {
    await dispatch(deleteTicketAsync(rowId));
    fetchTickets();
  };

  return (
    <StyledBox>
      {ticketsData && (
        <StyledDataGrid
          autoHeight
          rows={ticketsData}
          rowHeight={92}
          columns={[
            ...columns,
            {
              field: 'menu',
              headerName: '',
              width: 15,
              sortable: false,
              renderCell: (params) => {
                return (
                  <>
                    <Stack>
                      <CustomSelect IconComponent={MoreVertIcon}>
                        <StyledMenuItem onClick={() => toggleUpdateModal(params.row.id)}>
                          Edit
                        </StyledMenuItem>
                        <StyledMenuItem onClick={() => handleDeleteClick(params.row.id)}>
                          Delete
                        </StyledMenuItem>
                      </CustomSelect>
                    </Stack>
                  </>
                );
              },
            },
          ]}
          pageSizeOptions={pageSizeOptions}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
          disableColumnMenu
          slots={{
            toolbar: () => (
              <CustomToolbar
                dispatch={dispatch}
                fetchTickets={fetchTickets}
                toggleModal={toggleModal}
                setSearchParams={setSearchParams}
                selectedPriorities={selectedPriorities}
                setSelectedPriorities={setSelectedPriorities}
                isModalOpen={isModalOpen}
              />
            ),
          }}
        />
      )}
      {isUpdateModalOpen && (
        <>
          <TicketsModal
            toggleModal={toggleUpdateModal}
            handleForm={handleEditClick}
            refetchTickets={fetchTickets}
            initialValues={ticketsData?.find((ticket) => ticket.id === paramsId) || null}
          />
        </>
      )}
    </StyledBox>
  );
};

export default TicketsTable;
