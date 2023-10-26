import { GridToolbarContainer } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SubmitHandler } from 'react-hook-form';
import TicketService from '../../service/TicketService';
import TicketsModal from '../modals/tickets';
import { columns } from './helper';
import { useAppDispatch } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { Button, FormControl, InputLabel, MenuItem, Stack } from '@mui/material';
import {
  CustomSelect,
  FilterSelect,
  SortSelect,
  StyledBox,
  StyledDataGrid,
  ViewButton,
} from './styled';

import { ITicketInitialValues, ITickets, IUpdateTickets } from '../../types/tickets';
import { createTicketAsync, deleteTicketAsync, updateTicketAsync } from '../../store/tickets/thunk';
import { useCallback, useEffect, useState } from 'react';

const TicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [paramsId, setParamsId] = useState('');
  const [ticketsData, setTicketsData] = useState<ITicketInitialValues[] | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const _sort = searchParams.get('_sort');
  const _order = searchParams.get('_order');
  const priority = searchParams.get('priority');
  const _page = searchParams.get('_page');
  const pageSize = searchParams.get('pageSize');

  const [paginationModel, setPaginationModel] = useState({
    pageSize: pageSize ? parseInt(pageSize) : 8,
    page: _page ? parseInt(_page) : 0,
  });

  useEffect(() => {
    fetchTickets();
  }, [_sort, _order, priority, _page, paginationModel]);

  const buildApiUrl = () => {
    setSearchParams((params) => {
      params.set('_page', paginationModel.page.toString());
      params.set('pageSize', paginationModel.pageSize.toString());
      return params;
    });
    let apiUrl = `?_sort=${_sort || ''}&_order=${_order || ''}`;

    if (priority) {
      apiUrl += `&priority=${priority}`;
    }

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

  const dispatch = useAppDispatch();

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

  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    fetchTickets();
    toggleModal();
  };
  const sortingOptions = [
    { label: 'Ticket Asc', value: 'ticket-asc' },
    { label: 'Ticket Desc', value: 'ticket-desc' },
    { label: 'Customer Asc', value: 'customer-asc' },
    { label: 'Customer Desc', value: 'customer-desc' },
    { label: 'Date Asc', value: 'date-asc' },
    { label: 'Date Desc', value: 'date-desc' },
    { label: 'Priority Asc', value: 'priority-asc' },
    { label: 'Priority Desc', value: 'priority-desc' },
  ];
  const priorityOptions = ['High', 'Normal', 'Low'];

  const handleSortByClick = async (option: string) => {
    const [field, order] = option.split('-');
    setSearchParams((params) => {
      params.set('_sort', field);
      params.set('_order', order);
      params.set('_page', paginationModel.page.toString());
      params.set('pageSize', paginationModel.pageSize.toString());
      priority ? params.set('priority', priority) : '';
      return params;
    });

    try {
      const response = await TicketService.get(buildApiUrl());
      setTicketsData(response.data);
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  };

  const handlePriorityFilter = async (prioritySearch: string) => {
    setSearchParams((params) => {
      _sort ? params.set('_sort', _sort) : '';
      _order ? params.set('_order', _order) : '';
      params.set('_page', paginationModel.page.toString());
      params.set('pageSize', paginationModel.pageSize.toString());
      params.set('priority', prioritySearch);
      return params;
    });

    try {
      const response = await TicketService.get(buildApiUrl());
      setTicketsData(response.data);
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  };
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <FormControl>
          <InputLabel htmlFor='sort-select' shrink={false}>
            Sort
          </InputLabel>
          <SortSelect
            label='Sort'
            value=''
            onChange={(e) => handleSortByClick(e.target.value as string)}
            inputProps={{
              id: 'sort-select',
            }}
          >
            {sortingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SortSelect>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='priority-select' shrink={false}>
            Filter
          </InputLabel>
          <FilterSelect
            value=''
            label='Priority'
            onChange={(e) => handlePriorityFilter(e.target.value as string)}
            inputProps={{
              id: 'priority-select',
            }}
          >
            {priorityOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </FilterSelect>
        </FormControl>

        <ViewButton onClick={toggleModal}>Add Ticket</ViewButton>
        {isModalOpen && (
          <>
            <TicketsModal
              toggleModal={toggleModal}
              handleForm={handleCreateTicket}
              refetchTickets={fetchTickets}
              initialValues={null}
            />
          </>
        )}
      </GridToolbarContainer>
    );
  }
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
                const handleDeleteClick = async (rowId: string) => {
                  await dispatch(deleteTicketAsync(rowId));
                  fetchTickets();
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
          pageSizeOptions={[5, 8, 10, 25]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
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
            refetchTickets={fetchTickets}
            initialValues={ticketsData?.find((ticket) => ticket.id === paramsId) || null}
          />
        </>
      )}
    </StyledBox>
  );
};

export default TicketsTable;
