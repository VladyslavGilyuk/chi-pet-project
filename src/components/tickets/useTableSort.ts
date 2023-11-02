import { fetchTicketAsync } from '../../store/tickets/thunk';
import { useAppDispatch } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
interface IProps {
  searchParams: URLSearchParams;
  fetchTickets: () => Promise<void>;
  selectedPriorities: string[];
  setSelectedPriorities: React.Dispatch<React.SetStateAction<string[]>>;
  paginationModel: {
    pageSize: number;
    page: number;
  };
  setPaginationModel: React.Dispatch<
    React.SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
}
export const useTableSortAndFilter = (): IProps => {
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
      await dispatch(fetchTicketAsync(`?${searchParams.toString()}`));
    } catch (error) {
      throw new Error('Failed to fetch tickets');
    }
  };

  return {
    searchParams,
    fetchTickets,
    selectedPriorities,
    setSelectedPriorities,
    paginationModel,
    setPaginationModel,
  };
};
