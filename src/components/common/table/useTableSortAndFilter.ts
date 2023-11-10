import { AsyncThunk } from '@reduxjs/toolkit';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { deleteContactAsync } from '../../../store/contacts/thunk';
import { useAppDispatch } from '../../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../store';
import { useEffect, useState } from 'react';

export type FetchAthynkThunk = AsyncThunk<
  | {
      data: IContactState[] | ITicketState[];
      totalCount: number;
    }
  | undefined,
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
  }
>;
export type DeleteAsyncThunk = AsyncThunk<
  ReturnType<typeof deleteContactAsync>,
  { id: string; apiUrl: string },
  {
    state: RootState;
    dispatch: AppDispatch;
  }
>;

export const useTableSortAndFilter = (fetch: FetchAthynkThunk) => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const priority = searchParams.getAll('priority');
  const _page = searchParams.get('_page') ?? '0';
  const _limit = searchParams.get('_limit') ?? '8';

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(priority);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: +_limit,
    page: _page === '0' ? +_page : +_page - 1,
  });

  const fetchTickets = async () => {
    await setSearchParams((params) => {
      params.set('_page', (paginationModel.page + 1).toString());
      params.set('_limit', paginationModel.pageSize.toString());
      return params;
    });
    try {
      await dispatch(fetch(`?${searchParams.toString()}`));
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [searchParams, selectedPriorities.length, paginationModel]);
  return {
    searchParams,
    fetchTickets,
    selectedPriorities,
    setSelectedPriorities,
    paginationModel,
    setPaginationModel,
  };
};
