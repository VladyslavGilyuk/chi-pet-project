import { fetchTicketAsync } from '../../store/tickets/thunk';
import { useAppDispatch } from '../../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

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

  const [searchParams] = useSearchParams();
  const priority = searchParams.getAll('priority');
  const _page = searchParams.get('_page') ?? '0';
  const _limit = searchParams.get('_limit') ?? '8';

  const [selectedPriorities, setSelectedPriorities] = useState<string[]>(priority);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: +_limit,
    page: +_page,
  });

  const buildApiUrl = useMemo(() => {
    const apiUrl = `?${searchParams.toString()} `;
    return apiUrl;
  }, [searchParams]);

  const fetchTickets = async () => {
    try {
      await dispatch(fetchTicketAsync(buildApiUrl));
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
