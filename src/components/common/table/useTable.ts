import { DataSelector } from '.';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { DeleteAsyncThunk, FetchAthynkThunk, useTableSortAndFilter } from './useTableSortAndFilter';
import { useCallback, useState } from 'react';

interface IProps {
  storeData: DataSelector;
  fetchAction: FetchAthynkThunk;
  deleteAction: DeleteAsyncThunk;
}
export const useTable = ({ storeData, fetchAction, deleteAction }: IProps) => {
  const dispatch = useAppDispatch();

  const { data, total } = useSelector(storeData);

  const {
    searchParams,
    setSelectedPriorities,
    selectedPriorities,
    paginationModel,
    setPaginationModel,
  } = useTableSortAndFilter(fetchAction);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITicketState | IContactState | null>(null);

  const handleUpdateItem = useCallback(
    (id?: string) => {
      const itemToEdit =
        (data as (ITicketState | IContactState)[])?.find((item) => item.id === id) || null;
      setSelectedItem(itemToEdit);
      setIsModalOpen(true);
    },
    [data],
  );

  const handleRemoveItem = useCallback(async (id: string, apiUrl: string) => {
    await dispatch(deleteAction({ id, apiUrl }));
  }, []);

  return {
    searchParams,
    data,
    total,
    selectedPriorities,
    setSelectedPriorities,
    paginationModel,
    setPaginationModel,
    handleUpdateItem,
    handleRemoveItem,
    isModalOpen,
    setIsModalOpen,
    selectedItem,
  };
};
