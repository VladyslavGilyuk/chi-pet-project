/* eslint-disable no-console */
import CustomToolbar from './customToolbar';
import { ITicketState } from '../../types/tickets';
import { MenuCell } from './cells/menuCell';
import TicketService from '../../service/TicketService';
import TicketsModal from '../modals/tickets';
import { tickets } from '../../store/tickets/selector';
import { useAppDispatch } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledBox, StyledDataGrid } from './styled';
import { columns, pageSizeOptions } from './helper';
import { deleteTicket, setTicketState } from '../../store/tickets/slice';
import { useCallback, useEffect, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<ITicketState | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const _sort = searchParams.get('_sort');
  const _order = searchParams.get('_order');
  const priority = searchParams.getAll('priority');
  const _page = searchParams.get('_page');
  const pageSize = searchParams.get('pageSize');

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(priority);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize ? parseInt(pageSize) : 8,
    page: _page ? parseInt(_page) : 0,
  });
  const [totalRows, setTotalRows] = useState(0);
  const storeTickets = useSelector(tickets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchTickets();
  }, [_sort, _order, _page, paginationModel, selectedPriorities]);

  const buildApiUrl = useCallback(() => {
    setSearchParams((params) => {
      params.delete('priority');
      selectedPriorities.forEach((p) => {
        params.append('priority', p);
      });
      params.set('_page', paginationModel.page.toString());
      params.set('pageSize', paginationModel.pageSize.toString());

      return params;
    });

    let apiUrl = `?_sort=${_sort || ''}&_order=${_order || ''}&_page=${
      paginationModel.page + 1 || ''
    }&_limit=${paginationModel.pageSize || ''}`;

    apiUrl += selectedPriorities.length
      ? selectedPriorities.map((priority) => `&priority=${priority}`).join('')
      : '';

    return apiUrl;
  }, [_sort, _order, selectedPriorities, paginationModel]);

  const fetchTickets = useCallback(async () => {
    try {
      const apiUrl = buildApiUrl();
      console.log(apiUrl);
      const response = await TicketService.getAll(apiUrl);
      setTotalRows(parseInt(response.headers['x-total-count']));
      dispatch(setTicketState(response.data));
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  }, [buildApiUrl, dispatch, selectedPriorities, setSearchParams]);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const toggleUpdateModal = useCallback(
    (id?: string) => {
      setSelectedTicket(storeTickets?.find((ticket) => ticket.id === id) || null);
      setIsUpdateModalOpen((prev) => !prev);
    },
    [storeTickets],
  );

  const handleDeleteClick = useCallback(
    async (rowId: string) => {
      const deletedTicket = await TicketService.delete(rowId);
      dispatch(deleteTicket(deletedTicket.data));
      fetchTickets();
    },
    [dispatch, fetchTickets],
  );

  return (
    <StyledBox>
      {storeTickets.length > 0 && (
        <StyledDataGrid
          autoHeight
          rows={storeTickets}
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
                  <MenuCell
                    id={params.row.id}
                    toggleUpdateModal={toggleUpdateModal}
                    handleDeleteClick={handleDeleteClick}
                  />
                );
              },
            },
          ]}
          paginationMode='server'
          rowCount={totalRows}
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
            dispatch={dispatch}
            toggleModal={toggleUpdateModal}
            refetchTickets={fetchTickets}
            initialValues={selectedTicket}
            isEdit={true}
          />
        </>
      )}
    </StyledBox>
  );
};

export default TicketsTable;
